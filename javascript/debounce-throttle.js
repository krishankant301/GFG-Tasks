//debounce 
function search(query){
    console.log("Searching for", query);
}


// search("Krishan");
// search("Krishan Yadav");
// search("Krishan Kant Yadav");

// debounce (fn, delay);

// function searchwithdebounce(fn,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             fn(...args);
//         },delay);
//     };
// }

function searchwithThrottle(fn,delay){
    let lastcall = 0;
    return function (...args){
        const currentcall = Date.now();
        if(currentcall-lastcall>=delay){
            lastcall = currentcall;
            fn(...args);
        }
    };
}


const res = searchwithThrottle(search,2000);
res("Krishan");
res("Krishan Yadav");
res("Krishan Kant Yadav");

