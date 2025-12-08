// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//           resolve("Success");
//     }, 2000);
// })
// console.log(promise1);

// let promise1 = Promise.resolve("Successful");
// console.log(promise1);

// method of promises ---- it uses array of promises
// let promise1 = Promise.resolve("Success1");
// let promise2 = Promise.resolve("Success2");
// let promise3 = Promise.reject("Rejected");

// Promise.all
// Promise.all([promise1,promise2, promise3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//Promise.allsettled
// Promise.allSettled([promise1,promise2, promise3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// Promise.race
// Promise.race([promise1,promise2, promise3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//Promise.any
// Promise.any([promise1,promise2, promise3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

fetch("https://dummyjson.com/products").then((data)=>{
            console.log("Successfull");
            console.log(data);
        }).catch((err)=>{
            console.log("Promise failed");
            console.log(`Error: ${err}`);
        }).finally(()=>{
            console.log("Promise is finished");
        });


// API calling -> return data in the form of buffer. -> convert data into json using .json() -> filter() -> index().print();
// async function fetchdata(){
//     const response = await fetch("https://dummyjson.com/product");
//     if(!response.ok){
//         console.log("Data was not available.")
//     }
//     const data = await response.json();
//     const sortdata = await data.sort();
//     console.log(sortdata);
// }
// fetchdata();