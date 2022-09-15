const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// Set default middlewares + default router
server.use(middlewares);
server.use(router);

// set default port
server.listen(port, () => {
    console.log(`JSON Server is running on ${port}`)
});

