import React from 'react'

/**
 * Hook for generating a game board.
 *
 * @param rows
 * @param columns
 * @param mapper
 */
export default function useGrid(rows: number, columns: number, mapper: callbackType):void[][] {
    return Array(rows).fill(null).map(() => Array(columns).fill(null).map(mapper))
}

