"use client";

import { useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

type NavMobileProps = {
  items: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
};

export default function NavMobile({
  items,
  activeId,
  onNavigate
}: NavMobileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeLabel = items.find((i) => i.id === activeId)?.label ?? "Menu";

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between">
        <span className="px-2 py-1 text-sm font-medium text-slate-700 truncate max-w-[12rem]">
          {activeLabel}
        </span>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-black/5"
        >
          <svg
            width="20"
            height="20"
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
      </div>

      {isOpen && (
        <ul
          id="mobile-nav"
          className="absolute right-0 top-full z-50 mt-2 w-48 rounded-2xl border border-black/10 bg-white/90 p-2 shadow-lg backdrop-blur-md"
        >
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-slate-900 bg-black/5"
                      : "text-slate-700 hover:text-slate-900 hover:bg-black/5"
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
  );
}
