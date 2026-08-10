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
          className={`term-flag ${filter === cat ? "is-active" : ""}`}
        >
          {cat === "all" ? "--all" : `--tag=${cat}`}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
