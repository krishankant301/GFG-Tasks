import http from "http";

const PORT = 3000;
const server = http.createServer((req,res)=>{
    // to terminate the cylce of request and response
    // res.end("Hi from server");

    //to leave the server in use state
    res.sendDate("Hi from server.")

});

server.listen(()=>{
    console.log("server started");
});