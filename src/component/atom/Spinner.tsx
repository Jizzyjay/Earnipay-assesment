import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 w-8 h-8 text-green-900`}
      ></div>
    </div>
  );
};

export default Spinner