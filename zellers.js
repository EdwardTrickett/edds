// let D = 31;
// let M = 10;
// let Y = 1983;
// if(M < 3){
// M = M + 12;
// Y = Y - 1;
// }
// let F = Math.floor(y / 100);
// let L = y - 100 * F;
// let S = Math.floor(2.6*M - 5.39) + Math.floor(L / 4) + Math.floor(F / 4) + D + L -2*F
// let X = S - (7*Math.floor(S / 7));
// console.log(X)

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const bDayParsed = Date.parse("Oct 18, 2013");
let d = new Date(bDayParsed);
console.log(days[d.getDay()]);


