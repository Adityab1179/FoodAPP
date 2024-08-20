import React from 'react';

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 18 }).map((_, index) => (
        <div key={index} className="shimmer"></div>
      ))}
    </div>
  );
};

export default Shimmer;
