/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import React, {useReducer} from 'react';
import Grid from '../Grid';
import {GAME_STATUS, GAME_EVENTS} from "../../utilities/gameEnums";
import {handleClick} from "../../utilities/handleClick";
import {getInitialGameState} from "../../utilities/getInitialGameState";

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case GAME_EVENTS.CLICK: {
            const {x, y} = action
            return handleClick(state, y, x);
        }

        case GAME_EVENTS.RESET: {
            return getInitialGameState();
        }

        default:
            return state;
    }
}

const Game = () => {
    const [state, dispatch] = useReducer(reducer, getInitialGameState());
    const {grid, player, status} = state;

    const handleClick = (x: number, y: number) => {
        dispatch({type: GAME_EVENTS.CLICK, x: x, y: y})
    }

    const playerMessage = status === GAME_STATUS.SUCCESS ?
        <h2 css={{color: 'green'}}>Winner: {player} 🎉🎉</h2> :
        <h2>Current Player: {player}</h2>;

    return (
        <div>
            {playerMessage}
            <div css={{margin: '1rem 0'}}>
                <button onClick={() => dispatch({type: GAME_EVENTS.RESET})}>Reset</button>
            </div>

            <Grid grid={grid} handleClick={handleClick}/>
        </div>
    )
}

export default Game;
