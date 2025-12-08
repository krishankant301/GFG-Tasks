let obj = {
    fname : "Krishan",
    lname: "Yadav",
    getname: function(city, state, country, pin){
        console.log(`my name is ${this.fname} ${this.lname}. I am from ${city}, ${state}, ${country}-${pin}`);
    },
}
// obj.getname();

let obj1 = {
    fname: "Akash",
    lname: "Kumar"
}
// obj1.getname();

//call method
obj.getname.call(obj1,"Agra","Uttar Pradesh", "India", 210045);

// apply
// obj.getname.apply(obj1, ["Agra","Uttar Pradesh", "India", 210045]);

//bind
// let any= obj.getname.bind(obj1);
// any("Agra","Uttar Pradesh", "India", 210045);