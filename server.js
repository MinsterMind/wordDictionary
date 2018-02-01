'use strict'

const Hapi = require('hapi')
const routes = require('./routes/word')

const server = Hapi.server({
    host:'localhost',
    port: 9000
})

server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, h) {

        return 'hello world';
    }
});

server.route(routes)

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();