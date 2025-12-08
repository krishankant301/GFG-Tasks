// function matarpaneer(matar, paneer){
//     console.log("Paneer is ready");
// }
// matarpaneer("matar","paneer");



//currying: until unless all parameters of execution are satisfied 
function automailer(to,sub,body){
    console.log(`Email has been sent to ${to} with subject ${sub} and a body containing ${body}`)   
}
// automailer("abc@gmail.com", "Demo");
automailer();



//functional programming approach
// function automailer(to){
//     return function(sub){
//         return function (body){
//             console.log(`Email has been sent to ${to} with subject ${sub} and a body containing ${body}`);
//         }
//     }
// }
// automailer("abc@gmail.com")("Demo");