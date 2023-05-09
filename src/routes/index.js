
const siteRouter = require('./site');
const loginRouter = require('./login');

route = (app)=>{
    app.use('/', siteRouter);
    app.use('/login', loginRouter);
};
module.exports = route;