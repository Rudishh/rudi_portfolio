import React from 'react';
import { HoverEffect } from './ui/CardHoverEffect';
import { jobs } from '@/data';

const Positions = () => {
  return (
    <div className="py-28" id="work_experience"> {/* Reduced from py-20 to py-4 */}
     <h1
  className="heading text-blue-500 text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-snug lg:leading-[3rem] bg-black/90 px-4 py-2 mb-4 relative z-10"
>
  Work Experience
</h1>

      <div className="max-w-5xl mx-auto px-8" style={{ position: 'relative', zIndex: 5 }}>
        {jobs && jobs.length > 0 ? (
          <HoverEffect items={jobs} />
        ) : (
          <p className="text-gray-300 text-center">No work experience available.</p>
        )}
      </div>
    </div>
  );
};

export default Positions;