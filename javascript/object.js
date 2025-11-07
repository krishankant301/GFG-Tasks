let obj={
    fname: "Krishan Kant",
    lname: "Yadav",
    age: 24
}

//read
console.log(obj.lname);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

obj.fname="Sahil";
console.log(obj);

let obj1=obj;
obj1.lname="Singh"