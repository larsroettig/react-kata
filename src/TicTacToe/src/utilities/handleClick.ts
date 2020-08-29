import {GAME_STATUS} from "./gameEnums";
import {clone} from "./clone";
import {flatten} from "./flatenGrid";
import {checkForWin} from "./checkForWin";
import {checkForDraw} from "./checkForDraw";
import {nextPlayer} from "./nextplayer";

export const handleClick = (state: GameState, y: number, x: number): GameState => {
    if (state.status === GAME_STATUS.SUCCESS) {
        return state;
    }

    const {grid, player} = state;

    if (grid[y][x]) {
        return state;
    }

    const nextState: GameState = clone(state);
    nextState.grid[y][x] = player;

    const flatGrid = flatten(nextState.grid)

    if (checkForWin(flatGrid)) {
        nextState.status = GAME_STATUS.SUCCESS
        return nextState
    }

    if (checkForDraw(flatGrid)) {
        return getInitialGameState();
    }

    nextState.player = nextPlayer(player);

    return nextState;
}