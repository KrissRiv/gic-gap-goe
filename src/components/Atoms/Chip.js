import React from 'react';
import './Chip.css';

const Chip = ({onClick, value}) => {
  return (
    <button className="chip" onClick={onClick}>
      {value}
    </button>
  );
}

export default Chip;
