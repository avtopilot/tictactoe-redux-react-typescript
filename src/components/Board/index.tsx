import * as React from "react";
import { CellModel } from "../../models/index";
import { SymbolType } from "../../types/index";
import { chunk } from "../../utils/array";
import { Cell } from "../Cell/index";
import "./style.css";

interface BoardProps {
  board: CellModel[];
  turn: SymbolType;
  onClick: (id: number, symbol: SymbolType) => void;
}

const boardRow = (
  rowCells: CellModel[],
  key: number,
  turn: SymbolType,
  onClick: (id: number, symbol: SymbolType) => void
) => {
  const renderSquare = (cell: CellModel) => (
    <Cell
      value={cell.symbol}
      id={cell.id}
      turn={turn}
      onClick={onClick}
      key={cell.id}
    />
  );

  return (
    <div className="board-row" key={key}>
      {rowCells.map(r => renderSquare(r))}
    </div>
  );
};

export const Board: React.SFC<BoardProps> = ({ board, turn, onClick }) => {
  const boardChunk = chunk(board || [], 3);

  return <div>{boardChunk.map((b, i) => boardRow(b, i, turn, onClick))}</div>;
};
