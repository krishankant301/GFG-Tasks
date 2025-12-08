function rawsandwich(name,cb){
    setTimeout(() => {
        console.log(`Materials for ${name} collected.`);
        cb();        
    }, 1000);
}
function bunslice(cb){
    setTimeout(() => {
        console.log("Buns are sliced.");
        cb();
    }, 2000);
}
function cutting(cb){
    setTimeout(() => {
        console.log("vegetables are being cut.");
        cb();
    }, 3000);
}
function stuff(cb){
    setTimeout(() => {
        console.log("Stuffing are added to sandwich");
        cb();
    }, 4000);
}
function serve(cb){
    setTimeout(() => {
         console.log("Sandwich is served");
        cb();
    }, 5000);
}

rawsandwich("veg", ()=> {
    bunslice(() => {
        cutting(() => {
            stuff(()=> {
                serve(()=>{
                    console.log("All process completed")
                })
            })
        })
    })
})

// rawsandwich.bunslice.cutting.stuff.serve(()=>{console.log("All process are completed")});