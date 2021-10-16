import { getRandom } from '../lib/Random';

type ICell = '.' | '-';
type ICellDom = '.' | HTMLDivElement;

class Area {
    private static VOID = '.';
    private static STAIR = '-';
    private static NB_COLUMNS = 7;
    private static POS_START = 3;
    private grid: Array<any>;
    private nb_columns = 7;
    constructor() {
        this.grid = [];
    }

    //
    build() {
        if (this.nb_columns % 2 == 0) throw 'NbColumnShouldBeOdd';
        const rows = 12;
        const columns = Array(this.nb_columns).fill({
            is_stair: false,
        });
        console.log(columns);
        for (let j = 0; j < rows; j++) {
            this.grid.push([]);
            for (let k = 0; k < this.nb_columns; k++) {
                this.grid[j].push('.');
            }
        }
        console.log(this.grid);
        this.addStairs();
    }
    private temp_pos = null;
    private next_pos = null;

    addLine() {
        // this.grid.row()
    }
    addStairs() {
        const start_position = this.nb_columns / 2 - 0.5;
        this.grid.forEach((row, i) => {
            console.log(i);
            if (i < 1) {
                console.log('!');
                this.grid[0][3] = Area.STAIR;
                this.temp_pos = start_position;
            } else {
                let direction = !getRandom(0, 1) ? 'RIGHT' : 'LEFT';

                if (this.temp_pos === 0) {
                    direction = 'RIGHT';
                }
                if (this.temp_pos === this.nb_columns - 1) {
                    direction = 'LEFT';
                }

                if (direction === 'RIGHT') {
                    this.grid[i][this.temp_pos + 1] = Area.STAIR;
                    this.temp_pos = this.temp_pos + 1;
                } else if (direction === 'LEFT') {
                    this.grid[i][this.temp_pos - 1] = Area.STAIR;
                    this.temp_pos = this.temp_pos - 1;
                }
            }
        });

        console.log(this.grid);
    }

    fillMap(map) {
        const regexp = new RegExp('.', 'g');
        const m = map.map((row) => {
            const e = document.createElement('div');
            e.className = 't';
            // let r = row.join('').replace('-', e.outerHTML);

            let r = row;
            r[r.indexOf('-')] = e.outerHTML;
            const b = document.createElement('div');
            b.className = 'b';
            // e.style.backgroundColor = 'black';
            console.log(b.outerHTML);
            r = r.map((c) => (c === '.' ? b.outerHTML : c));
            // r = r.replace(/./g, b.outerHTML);
            return r.join('');
        });
        return m.join('');
    }

    addMapToDom(selector, flled_map) {
        document.querySelector(selector).innerHTML = flled_map;
    }

    generateMap(rows: number): ICell[][] {
        let temp_pos = null;
        const grid = [];
        for (let j = 0; j < rows; j++) {
            grid.push([]);
            for (let k = 0; k < Area.NB_COLUMNS; k++) {
                grid[j].push('.');
            }
        }
        grid.forEach((row, i) => {
            if (i < 1) {
                grid[0][Area.POS_START] = Area.STAIR;
                temp_pos = Area.POS_START;
            } else {
                let direction = !getRandom(0, 1) ? 'RIGHT' : 'LEFT';

                if (temp_pos === 0) {
                    direction = 'RIGHT';
                }
                if (temp_pos === Area.NB_COLUMNS - 1) {
                    direction = 'LEFT';
                }

                if (direction === 'RIGHT') {
                    grid[i][temp_pos + 1] = Area.STAIR;
                    temp_pos = temp_pos + 1;
                } else if (direction === 'LEFT') {
                    grid[i][temp_pos - 1] = Area.STAIR;
                    temp_pos = temp_pos - 1;
                }
            }
        });

        return grid;
    }
    printStairs() {
        const root = document.querySelector('#root') as HTMLDivElement;
        root.innerHTML = '';
        root.style.width = this.nb_columns * 50 + 'px';
        root.style.display = 'flex';
        root.style.flexWrap = 'wrap';
        this.grid.forEach((row) => {
            row.forEach((element) => {
                const el = document.createElement('div');
                Object.assign(el.style, {
                    width: '50px',
                    height: '50px',
                    backgroundColor: element.is_stair ? 'tomato' : 'green',
                });
                root.prepend(el);
            });
            root.prepend();
        });
    }
    createColumn() {
        const el = document.createElement('div');
        el.style.width = el.style.height = '50px';

        return {
            element: document.createElement('div'),
        };
    }
}

export default Area;
