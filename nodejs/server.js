// import http from "http";

// const PORT = 3000;
// const server = http.createServer((req,res)=>{
//     // to terminate the cylce of request and response
//     // res.end("Hi from server");

//     //to leave the server in use state
//     res.sendDate("Hi from server.")

// });

// server.listen(()=>{
//     console.log("server started");
// });\


// export default function fetchData(url){
//     fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err))
//     .finally(()=>console.log("API called"))

// }






// Using http core model

// import http from "http";
// import fs from "fs";
// const PORT = 3000;
// const server = http.createServer((req,res)=>{
//     // console.log(req.url);
//     console.log(req.method);
//     // console.log(req.headers);
//     // console.log(req.body);

//     // console.log(res);

//     // res.setHeader("auther", "Vikas");
//     // res.setHeader("type","plain/text");
//     // res.statusCode=200;
//     // res.end("Hii from server")

//     if(req.url =="/home"){
//         fs.readFile("./Home.html", (err,data)=>{
//             if(err){
//                 res.end(`error found ${err}`)
//             }
//             res.end(data);
//         });
//     }
// });


// server.listen(PORT,()=>{
//     console.log(`server started at ${PORT}`);
// });

import express from "express";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";

// const __filename=
const server = express();
// console.log(server)

const PORT = 3000;
server.set("view_engine","ejs");
server.set("views", ");

server.get("/",(req,res)=>{
    res.end("HI from home page");
});
server.get("/about", (req,res)=>{
    res.end("Hi from about page.")
})

server.listen(PORT,()=>{
    console.log("server started");
})