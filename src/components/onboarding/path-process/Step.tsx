
import React from 'react';

interface StepProps {
  title: string;
  index: number;
  onClick: () => void;
}

const Step = ({ title, index, onClick }: StepProps) => {
  return (
    <div className="relative flex items-center">
      <button
        onClick={onClick}
        className={`w-8 h-8 rounded-full bg-[#9b87f5] 
                  hover:bg-[#7e69ab] transition-colors duration-200 
                  flex items-center justify-center cursor-pointer
                  shadow-[0_2px_4px_rgba(0,0,0,0.2)]
                  ml-[calc(50%-1rem)]`}
        aria-label={`View ${title} details`}
      />
      
      <h3 className="text-xl font-semibold ml-3">
        {title}
      </h3>
    </div>
  );
};

export default Step;
