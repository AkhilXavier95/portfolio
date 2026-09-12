---
title: "Exposing a Home Server to the Internet"
date: "2026-09-11"
description: "My Tailscale-only home server works great for me but not for a link I can send a friend. Here's how I put a real domain in front of it with Cloudflare Tunnel — normal HTTPS for anyone, no ports opened on the router."
slug: "exposing-home-server-caddy-docker-cloudflare-tunnel"
category: "Development"
tags: ["Cloudflare", "Docker", "Caddy", "Tailscale", "Self-Hosting"]
---

I've got an old M1 Mac running as a little home server. It hosts a couple of websites in Docker, behind Caddy, and I can reach it from anywhere using Tailscale. That setup works great for me, but it's not something I can send a friend a link to. Tailscale only works on devices I've personally set up, and the addresses look like `http://100.x.x.x:8080`, not a real website.

This post is about the next step: putting a real domain in front of it, so `portfolio.akhilxavier.com` just works for anyone, over normal HTTPS, without opening any ports on my home router.

## What I already had

Tailscale creates a private network between your own devices, wherever they physically are. Once it's installed on the Mac and on my laptop and phone, they can all talk to each other directly and securely, like they're on the same home wifi even when they're not. It's how I SSH into the server or open its sites from my phone while I'm out. The Mac gets a fixed private address (something like `100.x.x.x`) that only my own devices can see.

Docker and Caddy run the actual websites. I picked Caddy over nginx mainly because the config is so much less fiddly, just a short block per site and it works. One Caddy container serves two sites on two ports:

```yaml
# docker-compose.yml
services:
  caddy:
    image: caddy:latest
    container_name: caddy
    restart: unless-stopped
    ports:
      - "8080:80"
      - "8081:81"
    volumes:
      - /Users/akhil/website/portfolio/out:/srv/portfolio
      - /Users/akhil/website/site2:/srv/site2
      - ./Caddyfile:/etc/caddy/Caddyfile
```

And the Caddyfile it points to is just two blocks:

```text
# Caddyfile
:80 {
    root * /srv/portfolio
    file_server
}
:81 {
    root * /srv/site2
    file_server
}
```

Port `8080` shows my portfolio, `8081` shows a second project. Tailscale already let me open both from any of my own devices, just not from a stranger's browser, and not with a real URL.

I'd also already bought a domain, `akhilxavier.com`, through Cloudflare.

## The missing piece: Cloudflare Tunnel

Normally, making a home server public means forwarding ports on your router and pointing your domain at your home IP. That's annoying to set up and a bit risky to leave open. Cloudflare Tunnel skips all of that: a small background program on the server (`cloudflared`) opens an outbound connection to Cloudflare, so nothing has to be opened for the outside world to reach in. Cloudflare takes the public traffic and forwards it down that same tunnel, and it handles the HTTPS certificate for you.

Here's how I set it up.

### 1. Create the tunnel

In the Cloudflare dashboard: Zero Trust → Networks → Tunnels → Create a tunnel. Choose connector type Cloudflared and give it a name (I used `m1-mac-server`). Cloudflare then gives you a command with a token in it:

```bash
cloudflared tunnel run --token ayJxHua...
```

Keep that token, it's what tells your server which tunnel it belongs to.

### 2. Run cloudflared on the Mac

I could have run `cloudflared` as another Docker container next to Caddy, but since Caddy already serves its sites on the Mac's own `localhost`, it's simpler to install `cloudflared` directly as a background service, no Docker needed:

```bash
sudo cloudflared service install <your-token-here>
```

Check it's running:

```bash
sudo launchctl list | grep cloudflare
```

If you'd installed it before, uninstall first (`sudo cloudflared service uninstall`) and reinstall with the new token, it won't run two at once. Back in the dashboard, the tunnel should show as Healthy with the Mac listed as a connected replica.

### 3. Point it at the local site

This is the step I got briefly lost on, since Cloudflare's dashboard has a few similarly-named sections. Ignore the general Networks → Routes page, that's for something else entirely. Instead, open the tunnel itself, go to its Routes tab, and add a route:

```text
Hostname:     portfolio.akhilxavier.com
Service type: HTTP
URL:          100.x.x.x:8080
```

Saving that both tells the tunnel where to send this hostname's traffic and creates the DNS record for it automatically.

The `HTTP` (not `HTTPS`) service type looks wrong at first, but it only covers the last private leg, from `cloudflared` to Caddy over Tailscale, which no one outside my own devices can see anyway. The leg the internet actually sees, between a visitor and Cloudflare, is always HTTPS regardless of this setting.

### 4. Check it works

```bash
curl -I https://portfolio.akhilxavier.com
```

An `HTTP/2 200` means the whole chain works: domain → Cloudflare → tunnel → Caddy → site.

One trap: right after setting this up, the same Mac may still fail to resolve the domain, even though it's live everywhere else. That's just its local DNS cache holding an old "doesn't exist" answer. Confirm with a public resolver:

```bash
dig portfolio.akhilxavier.com @1.1.1.1
```

If that resolves fine but your browser still can't find the site, flush the local cache:

```bash
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
sudo killall mDNSResponderHelper
sudo dscacheutil -flushcache
```

## Where that leaves things

Tailscale still quietly connects my own devices to the server, same as before. Cloudflare Tunnel sits on top of it, giving the one site I want public a real, secure address anyone can reach, without opening a port on my router. The Docker and Caddy setup didn't change at all, the tunnel just needed to know which local port to talk to. Adding a subdomain for the second site is the same two-minute process, just pointed at port `8081`.
