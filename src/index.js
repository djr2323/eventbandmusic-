const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handleBars = require('express-handlebars').engine;
const app = express();

const route = require('./routes');

const port = 3300;

app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname,'img')));
app.use(express.static(path.join(__dirname,'asset')));

app.use(express.urlencoded({
    extended: true
}))

app.engine('hbs',handleBars({
    extname:'hbs'
}))


app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resource/views'));

app.use(express.json());
app.use(morgan('combined'))

route(app);



app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`))