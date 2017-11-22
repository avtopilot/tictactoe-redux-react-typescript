import * as React from 'react';
import { Cell } from '../Cell/index';
import './style.css';

export const Board: React.SFC = () => {
  const renderSquare = (i: number) => <Cell value={i.toString()}/>;

  return (
    <div>
      <div className="board-row">
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </div>
      <div className="board-row">
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
    </div>
  );
};
