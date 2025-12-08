import fs from "fs";

// write operation

// sync method
// fs.writeFileSync("Demo.txt", "Hello World, Good Morning.");

// async method
// fs.writeFile("Demo.pdf", "MERN Stack class", (err, data) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(`File created with data: ${data}`);
// });


// read operation

// sync method
// const data= fs.readFileSync("Demo.txt", "utf-8");
// console.log(data);

//async method
// fs.readFile("Demo.pdf", "utf-8", (err,data) =>{
//     if(err){
//         console.log(`Something went wrong: ${err}`);
//         return ;
//     }
//     console.log(`Data fethed sucessfully: ${data}`);
// })

// append operation

// sync method
// fs.appendFileSync("Demo.txt", "\nThis is firest update.")

//async method
// fs.appendFile("Demo.pdf", "\nNode is introduced to the class.", (err,data)=>{
//     if(err){
//         console.log(`Something went wrong: ${err}`);
//         return ;
//     }
//     console.log("Pdf Updated");
// })


// deletion operation

//sync method
// fs.unlinkSync("Demo.txt");

//async method
fs.unlink("Demo.pdf", (err,data) =>{
    if(err){
        console.log(`Something went wrong with ${err}`);
        return;
    }
    console.log("File unlinked successfully.");
})