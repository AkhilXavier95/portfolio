import React from "react";

interface CategoryListProps {
  categories: string[];
  filter: string;
  setFilter: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  filter,
  setFilter,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => setFilter(cat)}
          className={`border px-3.5 py-2 text-sm font-medium transition-colors ${
            filter === cat
              ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
              : "border-[var(--border)] bg-[var(--surface)] text-[var(--ink-muted)] hover:border-[var(--accent)] hover:text-[var(--ink)]"
          }`}
        >
          {cat === "all" ? "All Posts" : cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
