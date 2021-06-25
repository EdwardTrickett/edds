// let bunny = {
//     _name: "Bouncy",
//     _hops: 0,
class Bunny{
    constructor(name){
    this._name = name;
    this._hops = 0;
    }
    get name() {
    return this._name;
    }
    
    get hops() {
    return this._hops;
    }

    increaseHops() {
    this._hops++;
    }
}

const rosie = new Bunny("Rosie");
console.log(rosie.name);
console.log(rosie._name);
console.log(rosie._hops);
rosie.increaseHops();
rosie.increaseHops();
rosie.increaseHops();
console.log(rosie._hops);

const jim = new Bunny("Jim");
console.log(jim.name);
console.log(jim._name);
console.log(jim._hops);
jim.increaseHops();
jim.increaseHops();
jim.increaseHops();
jim.increaseHops();
console.log(jim._hops);

const bob = new Bunny("Bob");
console.log(bob.name);
console.log(bob._name);
console.log(bob._hops);
bob.increaseHops();
bob.increaseHops();
bob.increaseHops();
bob.increaseHops();
console.log(bob._hops);


