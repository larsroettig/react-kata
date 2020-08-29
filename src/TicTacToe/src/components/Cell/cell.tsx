/** @jsx jsx */
import {css, jsx} from '@emotion/core'

const Cell = (props: CellProp) => {
 
    let {value, onClick} = props;

    return (
        <div
            css={{
                backgroundColor: '#fff',
                width: 100,
                height: 100,
            }}
        >
            <button
                css={{
                    fontSize: '2.5rem',
                    width: '100%',
                    height: '100%',
                }}
                onClick={onClick}
                type="button"
            >
                {value}
            </button>
        </div>
    )
}

export default Cell;