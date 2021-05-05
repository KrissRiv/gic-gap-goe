import React from 'react';

const Chip = (onClick, value) => {
  return (
    <button className="chip" onClick={onClick}>
      {value}
    </button>
  );
}

export default Chip;
