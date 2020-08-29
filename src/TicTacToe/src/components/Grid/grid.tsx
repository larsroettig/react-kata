/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import Cell from '../Cell';

const Grid = (props: GridProps): JSX.Element => {
    let {grid, handleClick} = props;
    return (
        <div css={{display: 'inline-block'}}>
            <div
                css={{
                    backgroundColor: '#444',
                    display: 'grid',
                    gridTemplateRows: `repeat(3, 1fr)`,
                    gridTemplateColumns: `repeat(3, 1fr)`,
                    gridGap: 2,
                }}
            >
                {grid.map((row, rowIdx) =>
                    row.map((value, colIdx) => (
                        <Cell
                            key={`${colIdx}-${rowIdx}`}
                            onClick={() => {
                                handleClick(colIdx, rowIdx)
                            }}
                            value={value}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Grid;
