import http from "http";

const server = http.createServer( (request, response) => {
    response.write("Todolist API");
    response.end();
});

server.listen(3000);

// check on your browser with : http://localhost:3000
