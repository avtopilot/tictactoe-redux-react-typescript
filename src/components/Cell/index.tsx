import * as React from "react";
import { SymbolType } from "../../types/index";
import "./style.css";

interface CellProps {
  value: string | null;
  id: number;
  turn: SymbolType;
  onClick: (id: number, symbol: SymbolType) => void;
}

export const Cell: React.SFC<CellProps> = ({ value, id, turn, onClick }) => {
  const handleOnClick = () => {
    onClick(id, turn);
  };

  return (
    <button className="cell" onClick={handleOnClick}>
      {value}
    </button>
  );
};
