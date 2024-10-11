import React from 'react';

const Shimmer = () => {
  return (
    <div className="w-full h-full p-4 grid grid-cols-3 gap-4">
      {Array.from({ length: 18 }).map((_, index) => (
        <div
          key={index}
          className="w-full h-20 bg-slate-400 animate-pulse rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
