import React, {useState} from 'react'

const Dropdown = ({ options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue); 
  };
  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      <option value="">Виберіть опцію</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
