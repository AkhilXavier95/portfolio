"use client";

import { useEffect, useMemo, useState, useCallback } from "react";

type NavItem = {
  id: string;
  label: string;
};

type NavBarProps = {
  items?: NavItem[];
  scrollOffset?: number;
};

const getNavItems = (items?: NavItem[]): NavItem[] =>
  items ?? [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

const NavBar = ({ items, scrollOffset = 0 }: NavBarProps) => {
  const navItems = useMemo<NavItem[]>(() => getNavItems(items), [items]);
  const [activeId, setActiveId] = useState<string>(navItems[0]?.id ?? "");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (!element) return;

      const top =
        element.getBoundingClientRect().top + window.scrollY - scrollOffset;

      window.scrollTo({ top, behavior: "smooth" });

      if (history.pushState) {
        const url = new URL(window.location.href);
        url.hash = id;
        history.pushState(null, "", url.toString());
      } else {
        window.location.hash = id;
      }
    },
    [scrollOffset]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that is most visible
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
        threshold: [0.35, 0.5, 0.75, 1]
      }
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
    <nav aria-label="Primary" className="z-50 px-4 md:sticky md:top-4">
      <div className="relative mx-auto flex w-full max-w-5xl items-center justify-between md:justify-center">
        {/* Desktop capsule (border-only) */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-4 rounded-full border border-white/20 bg-transparent px-5 py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.25),_0_8px_30px_rgba(0,0,0,0.35)]">
            <div className="hidden select-none items-center gap-2 rounded-full bg-white/10 px-2 py-1 text-xs font-mono tracking-tight text-slate-200 md:flex">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-slate-200"
              >
                <path
                  d="M8 7L3 12L8 17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 7L21 12L16 17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 5L11 19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>&lt;Dev /&gt;</span>
            </div>

            <ul className="hidden md:flex list-none items-center gap-7">
              {navItems.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                        setIsOpen(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          scrollToSection(item.id);
                          setIsOpen(false);
                        }
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-block px-1 py-1.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Mobile hamburger (right corner) */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-200 hover:bg-white/10"
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

        {/* Mobile dropdown (top-right) */}
        {isOpen && (
          <ul
            id="mobile-nav"
            className="absolute right-4 top-[calc(100%+8px)] z-50 w-[min(90vw,20rem)] rounded-2xl border border-white/15 bg-black/70 p-2 shadow-xl backdrop-blur-md md:hidden"
          >
            {navItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                      setIsOpen(false);
                    }}
                    className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
