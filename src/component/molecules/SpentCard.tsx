import React, { useState } from 'react';
import Select from '../atom/Select';
import spentData from '../../assets/Group 1487626284.svg';
import TotalExpensesChart from './TotalExpensesChart';

const SpentCard = () => {
  const [selectedOption, setSelectedOption] = useState<string>('option2');

  const options = [
    { value: 'option1', label: 'This Week' },
    { value: 'option2', label: 'This Month' },
    { value: 'option3', label: 'This Year' },
  ];

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-white h-[450px] xl:h-[555px] rounded-xl p-2 my-2 shadow-md">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-sm font-semibold">How you spent</h2>
        <div className=" flex justify-end">
          <Select
            id="example-select"
            options={options}
            value={selectedOption}
            onChange={handleOptionChange}
            placeholder="This week"
          />
        </div>
      </div>
      
      {selectedOption === 'option1' ? (
        <TotalExpensesChart />
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 pt-10">
          <img src={spentData} alt="box" className="w-[14rem] h-[14rem]" loading="lazy" />
        </div>
      )}
    </div>
  );
};

export default SpentCard;
