export const checkThree = (a?: string, b?: string, c?: string) => {
    if (!a || !b || !c) return false;
    return (a === b) && (b === c);
}