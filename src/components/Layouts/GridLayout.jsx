// components/Layout/GridLayout.jsx
import React from "react";

const GridLayout = ({ children, cols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", gap = "gap-6" }) => (
  <div className={`grid ${cols} ${gap}`}>
    {children}
  </div>
);

export default React.memo(GridLayout);
