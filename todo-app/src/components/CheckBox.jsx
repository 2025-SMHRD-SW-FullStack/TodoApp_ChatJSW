import React, { useState } from 'react';

const CheckBox = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <input 
        type="checkbox" 
        checked={isChecked}
        onChange={handleCheck}
      />
      <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {item}
      </span>
    </div>
  );
};

export default CheckBox;