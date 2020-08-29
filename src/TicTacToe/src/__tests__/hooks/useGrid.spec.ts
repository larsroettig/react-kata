
import useGrid from "../../hooks/useGrid";

describe("Simple expression tests", () => {
    test('should render without an error', () => {
        const result =  useGrid(3, 3, () => 1);
        expect(result).toStrictEqual([
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ])
    });
});