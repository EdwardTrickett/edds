if ("1" !== 1) {
    console.log(true);
}
else {
    console.log(false);
}
//I like music
let place = "Manc";
let weather = "Cloudy";
if (place == "Manc" && weather == "Sunny") {
console.log("Check again"); 
}
else if (place == "Manc" && weather == "Cloudy") {
console.log("Obvs"); 
}
else {
console.log("What it isn't raining?"); 
}
//fuck it
let car = "Peugeot"
if(car == "Ford" || car == "GM"){
 console.log("You've got an American car!");
}
else if(car == "Peugeot" || car == "Citroen"){
 console.log("You've got a French boy!");
}
else if(car == "Honda" || car == "Toyota" || car == "Suzuki"){
 console.log("Japanese cars are dead quiet!");
}
else if(car == "Mercedes"){
 console.log("You are proper posh German!");
}
else if(car == "Volkswagen"){
 console.log("German aren't that bad at all!");
}
else if(car == "Hyundai" || car == "Kia"){
 console.log("South Korean cars are getting popular!");
}
else{
 console.log("Your car is not in the top ten companies in the world!");
}
//coffee is king
switch(car){
 case "Ford":
 case "GM": 
 console.log("You've got an American car!");
 break;
 case "Peugeot":
 case "Citroen": 
 console.log("You've got a French boy!");
 break;
 case "Honda":
 case "Toyota":
 case "Suzuki": 
 console.log("Japanese cars are dead quiet!");
 break;
 case "Mercedes": 
 console.log("You are proper posh German!");
 break;
 case "Volkswagen":
 console.log("German aren't that bad at all!");
 break; 
 case "Hyundai":
 case "Kia":
 console.log("South Korean cars are getting popular!");
 break; 
 default:
 console.log("Your car is not in the top ten companies in the world!!");
}
const grade = 87;
switch (true) {
    case grade >= 70:
    console.log("Distinction");
    break;
    case grade >= 60:
    console.log("Merit");
    break;
    case grade >= 50:
    console.log("Pass");
    break;
    default:
    console.log("Failed");
   }
   let topping = "cheese" 
   switch(topping){
    case "pepperoni":
    console.log("I LOVE pepperoni");
    break;
    case "pineapple":
    console.log("controversial");
    break;
    case "cheese": 
    console.log("nice and cheesy does");
    break;
    default:
    console.log("BORING!");
   }
   