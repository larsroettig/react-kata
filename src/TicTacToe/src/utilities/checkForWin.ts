import {checkThree} from "./checkThree";

export const checkForWin = (flatGrid: Array<string>) => {
    const [nw, n, ne, w, c, e, sw, s, se] = flatGrid
    return (
        checkThree(nw, n, ne) ||
        checkThree(w, c, e) ||
        checkThree(sw, s, se) ||
        checkThree(nw, w, sw) ||
        checkThree(n, c, s) ||
        checkThree(ne, e, se) ||
        checkThree(nw, c, se) ||
        checkThree(ne, c, sw)
    )
};