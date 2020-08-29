import useGrid from "../hooks/useGrid";
import {GAME_STATUS} from "./gameEnums";

export const getInitialGameState = () => ({
    grid: useGrid(3, 3, () => null),
    player: 'X',
    status: GAME_STATUS.PROGRESS
});