import Grid from './model/Grid';

const grid = new Grid({
    size_of_square: 10,
    number_of_squares: 10,
    unit: 'vw',
});

grid.render('#root');
