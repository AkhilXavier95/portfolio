"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

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

  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      setActiveId(id);
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
    <nav aria-label="Primary" className="sticky top-5 z-50 p-4">
      <div className="relative mx-auto w-1/2 rounded-full border border-black/10 bg-white/70 backdrop-blur-md backdrop-saturate-150 shadow-[0_1px_2px_rgba(0,0,0,0.04),_0_8px_24px_rgba(0,0,0,0.06)] px-3 py-2 md:px-4 md:py-2.5">
        <NavDesktop
          items={navItems}
          activeId={activeId}
          onNavigate={(id) => scrollToSection(id)}
        />
        <NavMobile
          items={navItems}
          activeId={activeId}
          onNavigate={(id) => scrollToSection(id)}
        />
      </div>
    </nav>
  );
};
export default NavBar;
