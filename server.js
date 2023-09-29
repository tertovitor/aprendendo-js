// import {createServer} from 'node:http'

// const server = createServer((request,response) => {
//     response.write("oiee")

//     return response.end();
// })

// server.liAsten(3333);


// //localhost:3333

import { fastify } from "fastify";

const server = fastify();

server.get('/',() => {
    return 'Hello World';
})

server.get('/hello',() => {
    return 'Hello Worldss';
})

server.listen({
    port:3333,
});