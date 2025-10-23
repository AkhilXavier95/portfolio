import React from "react";

interface CategoryListProps {
  categories: string[];
  filter: string;
  setFilter: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  filter,
  setFilter
}) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            filter === cat
              ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/50"
              : "bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700 hover:border-slate-600"
          }`}
        >
          {cat === "all" ? "All Posts" : cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
