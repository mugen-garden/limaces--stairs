class Square {
    private size: number;
    private color: string;
    constructor({ size, color }) {
        this.size = size;
        this.color = color;
        this.element = document.createElement('div');
        Object.assign(this.element.style, {
            backgroundColor: this.color,
            width: this.size + '%',
            height: '50px ',
            display: 'inline-block',
        });
    }
    public getSize() {
        return this.size;
    }

    public getColor() {
        return this.color;
    }

    private x;
    private y;
    public getPosition() {
        return { x: this.x, y: this.y };
    }

    public setPosition({ x, y }) {
        this.x = x;
        this.y = y;
    }

    private element: HTMLDivElement;
    public getElement() {
        return this.element;
    }
}

export default Square;
