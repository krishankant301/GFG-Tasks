// let age=90, age1=18, age2=10;
// if (age>18){
//     console.log("Eligible");
// }
// else if(age===18){
//     console.log("18");
// }
// else {
//     console.log("not eligible");
// }
let marks=9;
switch(true){
    
    case (marks>=90):
        console.log("A");
        break;
    case (marks>=80):
        console.log("B");
        break;
    case (marks>=70):
        console.log("C");
        break;
    case (marks>=60):
        console.log("D");
        break;
    case (marks<60):
        console.log("E");
        break;
    default:
        console.log("Enter valid marks");
        break;
}