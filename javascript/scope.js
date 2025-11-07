// global scope
    // let a =20;
    // console.log(a);
    // {
    //     console.log(a);
    // }
    // function test(){
    //     console.log(a);
    // }
    // test();

//Block Scope
    // {
    //     let a=10;
    //     const b=29;
    //     var c=34;
    //     // console.log(a,b,c);
    // }
    // console.log(a);

    // function test(){
    //     var a=10;
    //     // console.log(a);
    // }
    // test();


// lexical scope 
    // lexical scope vs lexical environment

function outer(){
    let a=50;
    function inner(){
        console.log(a);
    }
    return inner;
}
let res = outer();
// console.log(res);
res()
let res1 = res();
console.log(res1)

