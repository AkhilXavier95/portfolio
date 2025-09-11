"use client";

type NavItem = {
  id: string;
  label: string;
};

type NavDesktopProps = {
  items: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
};

export default function NavDesktop({
  items,
  activeId,
  onNavigate
}: NavDesktopProps) {
  return (
    <ul className="hidden md:flex list-none items-center justify-around gap-7">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onNavigate(item.id);
                }
              }}
              aria-current={isActive ? "page" : undefined}
              className={`inline-block py-1.5 font-medium transition-colors ${
                isActive
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
