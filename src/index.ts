import Grid from './model/Grid';
import Area from './model/Area';
// const grid = new Grid({
//     size_of_square: 10,
//     number_of_squares: 10,
//     unit: 'vw',
// });

// const canvas = document.getElementById('grid') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// ctx.fillRect(0, 0, 100, 100);

const area = new Area();
area.build();
const urlSearchParams = new URLSearchParams(window.location.search);
const number = urlSearchParams.get('n');
area.printStairs();

area.addMapToDom('#root', area.fillMap(area.generateMap(+number)));
