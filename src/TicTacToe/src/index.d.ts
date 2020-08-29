interface callbackType {
    (): void
}

interface handleCellClick {
    (x: number, y: number): void
}

interface GridProps {
    grid: void[][]
    handleClick: handleCellClick
}

interface CellProps {
    value?: string
    onClick: callbackType
}

interface GameState {
    grid: string[][],
    player: string,
    status:string
}
