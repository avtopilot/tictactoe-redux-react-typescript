import * as React from 'react';
import './style.css';

interface CellProps {
  value: string;
}

export const Cell: React.SFC<CellProps> = ({value}) => {
  return (
    <button className="cell">
      {value}
    </button>
  );
};