
const siteRouter = require('./site');

route = (app)=>{
    app.get('/', siteRouter);
};
module.exports = route;