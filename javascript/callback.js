// function sayhi(name, bye){
//     console.log('Hi good morning ${name}');
//     bye();
// }
// sayhi("Krishan", saybye);
// function saybye(){
//     console.log("Bye")
// }

function makemaggi(rawmaggi, cb){
    console.log('We are starting the maggi process with ${rawmaggi}');
    cb(addmaggi);
}

function waterboil(cb){
    console.log("We are boiling water to add maggi.");
    cb(serve);
}

function addmaggi(cb){
    console.log("We are adding maggi in water.");
    cb();
}

function serve(){
    console.log("Maggi is being served");
}

// makemaggi("maggi",waterboil);

// makemaggi("yippe", () => {
//     waterboil(()=>{
//         addmaggi(()=>{
//             serve(()=>{
//                 console.log("All process are done.");
//             });
//         });
//     });
// })



// settimeout
setTimeout(()=>{
    console.log("Hi");
}, 3000);