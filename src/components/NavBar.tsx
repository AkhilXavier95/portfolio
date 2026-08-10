"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { CONTACT_MAILTO } from "@/constants";

type NavItem = {
  id: string;
  label: string;
  href?: string;
};

type NavBarProps = {
  items?: NavItem[];
  scrollOffset?: number;
};

const getNavItems = (items?: NavItem[]): NavItem[] =>
  items ?? [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

const NavBar = ({ items, scrollOffset = 0 }: NavBarProps) => {
  const router = useRouter();
  const navItems = useMemo<NavItem[]>(() => getNavItems(items), [items]);
  const [activeId, setActiveId] = useState<string>(navItems[0]?.id ?? "");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const scrollToSection = useCallback(
    (value: NavItem) => {
      if (value.href) {
        router.push(value.href);
        return;
      }

      const element = document.getElementById(value.id);
      if (!element) return;

      const top =
        element.getBoundingClientRect().top + window.scrollY - scrollOffset;

      window.scrollTo({ top, behavior: "smooth" });

      if (history.pushState) {
        const url = new URL(window.location.href);
        url.hash = value.id;
        history.pushState(null, "", url.toString());
      } else {
        window.location.hash = value.id;
      }
    },
    [router, scrollOffset],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxIntersectionRatio = 0;
        let mostVisibleId: string | null = null;
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio > maxIntersectionRatio
          ) {
            maxIntersectionRatio = entry.intersectionRatio;
            mostVisibleId = entry.target.id;
          }
        }
        if (mostVisibleId) {
          setActiveId(mostVisibleId);
        }
      },
      {
        root: null,
        threshold: [0.35, 0.5, 0.75, 1],
      },
    );

    const targets: Element[] = [];
    for (const { id } of navItems) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        targets.push(el);
      }
    }

    return () => {
      for (const el of targets) observer.unobserve(el);
      observer.disconnect();
    };
  }, [navItems]);

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md"
    >
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection({ id: "home", label: "Home" });
          }}
          className="font-display text-base font-bold tracking-tight text-[var(--ink)] md:text-lg"
        >
          Akhil Xavier
        </a>

        <ul className="hidden list-none items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={item.href ? item.href : `#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                    setIsOpen(false);
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-block py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={CONTACT_MAILTO}
          className="hidden bg-[var(--accent)] px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)] md:inline-flex"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center text-[var(--ink)] md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {isOpen && (
          <ul
            id="mobile-nav"
            className="absolute right-4 top-[calc(100%+4px)] z-50 w-[min(90vw,18rem)] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-lg md:hidden"
          >
            {navItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <li key={item.id}>
                  <a
                    href={item.href ? item.href : `#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                      setIsOpen(false);
                    }}
                    className={`block px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "text-[var(--ink)] hover:bg-[var(--bg-muted)]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="border-t border-[var(--border)] pt-2">
              <a
                href={CONTACT_MAILTO}
                className="block bg-[var(--accent)] px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Let&apos;s talk
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
