let arr = [1,2,3,4];

//hof ->
//Case -1
//  they recieve the callback function.
//case -2
//  they return a function as a result.

//map

// arr.map((ele)=>{
//     console.log(ele*2);
// })
// console.log(arr);

//filter

// arr.filter((ele)=>{
//     if(ele%2==0){
//         console.log(ele);
//     }
// })

//reduce
// let result = arr.reduce((acc, ele)=>{
//     return acc + ele;
// });
// console.log(result);


let salary=[1000,2000,3000,4000,5000];
function calculatetenpercent(salary){
    return salary*0.1;
}

// let result = salary.map(calculatetenpercent);
// console.log(result);

// function calculatetax(salary, cb){
//     let res = [];
//     for(let i =0; i<salary.length; i++){
//         res.push(cb(salary[i]));
//     }
//     return res;
// }
// let result = calculatetax(salary,calculatetenpercent);

Array.prototype.calculatetax = function (cb){
    let res = [];
    for(let i=0; i<this.length; i++){
        res.push(cb(this[i]));
    }
    return res;
}
let result = salary.calculatetax(calculatetenpercent);
// console.log(result);


//IIFE function
(function show(){
    console.log("Hii");
})();


(()=>{
    console.log("Hii2");
})();
