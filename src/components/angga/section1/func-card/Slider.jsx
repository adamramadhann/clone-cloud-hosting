import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Slider = ({ label, value, unit, min, max, step, onChange }) => {
  const decrease = () => {
    if (value > min) onChange(value - step);
  };

  const increase = () => {
    if (value < max) onChange(value + step);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 font-semibold text-lg">{label}</span>
      </div>
      <div className="flex items-center gap-8">
        <input type="range" value={value} min={min} max={max} step={step} onChange={(e) => onChange(e.target.value)} className="w-[410px] h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer pr-2" />
        {/* <div className="flex-1 h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${((value - min) / (max - min)) * 100}%` }}
          />
        </div> */}
        <span className="text-gray-700 flex flex-1 justify-start text-nowrap font-semibold text-base">
          {value} {unit}
        </span>
        {/* <button 
          onClick={decrease}
          className="p-1 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
          disabled={value <= min}
        >
          <FiChevronLeft size={20} />
        </button> */}
        {/* <button
          onClick={increase}
          className="p-1 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
          disabled={value >= max}
        >
          <FiChevronRight size={20} />
        </button> */}
      </div>
    </div>
  );
};

export default Slider