import React from "react";

export default function Category({ categories, filterItems }) {
  return (
    <div className="categoryButtons">
      {categories.map((cat, index) => {
        return (
          <div className="btnGroup">
            <button
              key={index}
              className="btn"
              type="button"
              onClick={() => filterItems(cat)}
            >
              {cat}
            </button>
          </div>
        );
      })}
    </div>
  );
}
