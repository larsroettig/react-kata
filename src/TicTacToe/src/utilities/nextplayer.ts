export const nextPlayer = (currentPlayer: string): string => {
    return currentPlayer === 'X' ? '0' : 'X';
}