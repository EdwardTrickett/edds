let str = "hello";
let num = 20;
let bool = false;
const arr = ["tea", "coffee", "coke", "pepsi"];
console.log (arr);
arr.push("lemonade");

for(let i = 0; i < arr.length; i++){
    console.log (arr[i]);
}


function withdraw (int){
    num = num-int; 
    console.log(num);
}
withdraw(10);
