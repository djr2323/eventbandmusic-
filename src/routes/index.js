
const siteRouter = require('./site');
const loginRouter = require('./login');
const ticketRouter = require('./ticket');
const adminRouter = require('./admin');

route = (app)=>{
    app.use('/', siteRouter);
    app.use('/login', loginRouter);
    app.use('/tickets', ticketRouter);
    app.use('/admin', adminRouter);
};
module.exports = route;