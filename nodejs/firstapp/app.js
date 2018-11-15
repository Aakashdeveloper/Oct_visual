import express from 'express';
import chalk from 'chalk';
let debug = require('debug')('app');
import morgan from 'morgan';

let app = express();


app.use(morgan('tiny'));
app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

var navarray = [{link:'/', title:'Home'},
                {link:'/movies', title:'Movies'}]

let moviesRouter = require('./src/routes/moviesRoute')(navarray);

app.get('/',(req,res) => {
    res.render('index',{title:'Home Page', nav:navarray})
});

app.use('/movies', moviesRouter);

app.listen(2300,(err) => {
    console.log(`server running on port ${chalk.blue('2300')}`);
});