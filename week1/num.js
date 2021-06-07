function square(number) {
    return number * number; 
   };
    
   square(5);
   console.log(square(5));

   function factorial (n) {
       if ((n === 0) || (n === 1)){
           return 1;
       } else {
           return (n * factorial(n-1));
       }
   }
   console.log(factorial(33));