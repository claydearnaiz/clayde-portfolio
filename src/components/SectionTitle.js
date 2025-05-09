import React from 'react';

const SectionTitle = ({ title }) => (
  <div className="relative">
    <h2 className="text-4xl font-bold text-secondary relative inline-block pb-3">
      {title}
      <div className="absolute left-0 bottom-0 w-1/2 h-1 bg-accent-red rounded-full"></div>
      <div className="absolute left-0 bottom-0 w-full h-[2px] bg-accent-medium rounded-full"></div>
    </h2>
  </div>
);

export default SectionTitle; 