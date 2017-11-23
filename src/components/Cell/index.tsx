import * as React from 'react';
import './style.css';

interface CellProps {
  value: string;
  id: number;
  onClick: (id: number) => { type: string; id: number };
}

export const Cell: React.SFC<CellProps> = ({
  value,
  id,
  onClick
}) => {
  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <button className="cell" onClick={handleOnClick}>
      {value}
    </button>
  );
};