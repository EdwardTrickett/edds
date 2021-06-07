const prep = (size, drink) => {
    console.log(`your drink: ${size} ${drink} is ready`);
}
prep("medium","latte");

function factorial (n) {
    if ((n === 0) || (n === 1)) {
    return 1;
    } else {
    return (n * factorial(n-1));
    }
   }
   console.log(factorial(33));