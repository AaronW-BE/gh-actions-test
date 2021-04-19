const Koa = require('koa');
const app = new Koa();


app.use(async ctx => {
    ctx.body = 'Hello World';
});

module.exports = app;


app.listen(3000,  () => {
    console.log("app start at :3000")
});


