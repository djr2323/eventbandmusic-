const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handleBars = require('express-handlebars').engine;
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const app = express();

const route = require('./routes');
const db = require('./config/db')

const port = 3300;

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'publicAdmin')));

app.use(cookieParser())

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())
app.use(methodOverride("_method"))

app.engine('hbs',handleBars({
    extname:'hbs',
    helpers:{
        inc:(a)=>(a+1),
        price:(a)=>Number(a)*15
    }
}))




app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resource/views'));

app.use(express.json());
app.use(morgan('combined'))

db.connect();

route(app);



app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`))