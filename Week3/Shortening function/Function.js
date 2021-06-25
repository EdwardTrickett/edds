// /function say(something) {
//     console.log(something);     
//    }
//    function exec(func, arg){
//     func(arg);      
//    }
//    exec(say, "Hi, there")

//all the abov can be condensed as below

// function exec(func,arg){
//     func(arg);
// }
// exec(function say(something){
// console.log (something);
// }, "Hi,there");

//Anonymous function

function exec(func,arg){
    func(arg);      
}
exec((something) =>{
    console.log(something);
}, "Hi,there");

//because of arrow syntax