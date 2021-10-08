import Square from './Square';

class Grid {
    private size_of_square: number;
    private number_of_squares: number;
    private unit: 'vw' | 'vh' | 'px';
    private squares: Square[];
    private element: HTMLDivElement;
    constructor({ size_of_square, number_of_squares, unit }) {
        this.squares = [];
        this.size_of_square = size_of_square;
        this.number_of_squares = number_of_squares;
        this.unit = unit;
        this.element = document.createElement('div');
        this.element.style.width =
            (this.size_of_square * this.number_of_squares).toString() +
            this.unit;

        for (let i = 0; i < this.number_of_squares; i++) {
            this.addSquare(
                new Square({
                    size: this.size_of_square,
                    color: i % 2 == 0 ? 'limegreen' : 'tomato',
                })
            );
        }
    }

    public addSquare(square: Square) {
        this.element.append(square.getElement());
        this.squares.push(square);
    }

    public render(location: string) {
        document.querySelector(location).append(this.element);
    }
}

export default Grid;
