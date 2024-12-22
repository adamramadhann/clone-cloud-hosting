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
    <div className="mb-6 text-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="text-gray-900 font-semibold">
          {value} {unit}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={decrease}
          className="p-1 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
          disabled={value <= min}
        >
          <FiChevronLeft size={20} />
        </button>
        <div className="flex-1 h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${((value - min) / (max - min)) * 100}%` }}
          />
        </div>
        <button
          onClick={increase}
          className="p-1 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
          disabled={value >= max}
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Slider