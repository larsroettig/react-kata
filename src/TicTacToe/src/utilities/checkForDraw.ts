import {checkForWin} from "./checkForWin";

export const checkForDraw = (flatGrid: Array<string>) => (
    !checkForWin(flatGrid) &&
    flatGrid.filter(Boolean).length ===
    flatGrid.length
);