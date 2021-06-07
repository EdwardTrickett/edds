let coffeeIsGrinding = false;
const pressGrindBeans = () => {
 if (coffeeIsGrinding) {
 console.log("Stopping the grind");
 coffeeIsGrinding = false;
 } else {
 console.log("Grinding is about to begin");
 coffeeIsGrinding = true;
 }
}
pressGrindBeans();


