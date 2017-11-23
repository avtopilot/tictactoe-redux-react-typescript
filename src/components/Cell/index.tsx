import * as React from 'react';
import './style.css';
import { SymbolType } from '../../models/index';

interface CellProps {
  value: string;
  id: number;
  turn: SymbolType;
  onClick: (id: number, symbol: SymbolType) => { type: string; id: number };
}

export const Cell: React.SFC<CellProps> = ({
  value,
  id,
  turn,
  onClick
}) => {
  const handleOnClick = () => {
    onClick(id, turn);
  };

  return (
    <button className="cell" onClick={handleOnClick}>
      {value}
    </button>
  );
};