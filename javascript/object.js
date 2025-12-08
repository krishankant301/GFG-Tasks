// let obj={
//     fname: "Krishan Kant",
//     lname: "Yadav",
//     age: 24
// }

// //read
// console.log(obj.lname);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// obj.fname="Sahil";
// console.log(obj);

// let obj1=obj;
// obj1.lname="Singh"



// let obj ={
//     name: "Krishan",
//     age: 24,
//     salary: 345235
// }

// //Objet.freeze
// // obj.name= "Akash";
// // Object.freeze(obj);
// // obj.name="Krishan";
// // console.log(obj);


// //Object.seal
// obj.name= "Akash";
// Object.seal(obj);
// obj.name="Krishan";
// obj.address = "Delhi"
// console.log(obj);


let obj = {
    name : "Krishan",
    age: 24,
    salary: 21334235,
    address: {
        town: "Dwarka",
        state: "Delhi"
    }
}

// let obj1 = {...obj };

// structured clone
// let obj1 = structuredClone(obj);

// JSON method
// let obj1 = JSON.stringify(obj);     Coverts object into string
let obj1= JSON.parse(JSON.stringify(obj));
obj1.name = "Sahil";
obj1.address.town = "Palam";
console.log(obj);
console.log(obj1);