import { chunk } from '../../utils/array';
import * as React from 'react';
import { Cell } from '../Cell/index';
import './style.css';
import { ICell } from '../../models/index';

interface BoardProps {
  board: ICell[];
  onClick: (id: number) => { type: string; id: number; };
}

const boardRow = (
  rowCells: ICell[],
  key: number,
  onClick: (id: number) => { type: string; id: number; }
) => {
  const renderSquare = (cell: ICell) => (
    <Cell 
      value={cell.symbol}
      id={cell.id}
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

export const Board: React.SFC<BoardProps> = ({board, onClick}) => {
  const boardChunk = chunk(board || [], 3);
  return (
    <div>
      {boardChunk.map((b, i) => (
        boardRow(b, i, onClick)
      ))}
    </div>
  );
};
