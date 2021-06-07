let password = "password1"
if(password.length < 8){
    console.log("Your password is too short");
}
else if (password.length == 8){
    console.log("Your password is", password);
 }
else{
    console.log("What are you doing you dick sucking cunt");
}
//break
function multipleSum(n){   
    let sum = 0;
    for(let i = 1; i<n; i++){
      let m3 = 3 * i;
      let m5 = 5 * i;    
      if(m3 < n  ){
        sum=sum+m3
      }
      if(m5 < n ){
        sum=sum+m5;
      }
      //if(m3 > n && m5 > n) {console.log(m3,m5,sum);break;}
    }
    return sum
 }
 console.log(multipleSum(1000)) //266333 but correct one is 233168 why?