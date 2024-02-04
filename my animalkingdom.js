const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
class KingdomAnimalia {
    // creating base abstract class for fun... Thankfully, this isn't as complicated as that lms was lol 
    constructor (name, kingdom = 'Animalia'){
        if(this.constructor === KingdomAnimalia){
        throw new Error ('Class: AnimalKingdom cannot be instantiated. Consider instantiating a child class instead');
        }
    this.kingdom = kingdom;
    this.name = name;
    }
 
    // This method is private, showing encapsulation and all it entails.
    #identify(){
        console.log(`Animals classified under ${this.name} are ${this.bloodtemperature} and ${this.backbone}.`);
        console.log(this); 
    }
 
       
    // This method is used as a mediator to make the private method accessible.
    // This shows Abstraction, a method is declared but its implementation details are hidden.
    static identifyself(){
        this.identify();
    }
 
    animals(){
        console.log('These animals are in the ${this.name} category');
    }
 
}
 
 
// Creation of subclasses to inherit from AnimalKingdom.
class Vertebrate extends KingdomAnimalia {
    constructor(name){
        super (name);
    if(this.constructor === Vertebrate){
        throw Error (' this Class cannot be instantiated.');
    }
 
    this.backbone = ('have a backbone');
    }
}
 
// These subclasses inherit from the Parent class. 
// This shows Inheritance.  
class Invertebrate extends KingdomAnimalia {
    constructor(name){
        super (name);
    if(this.constructor === Invertebrate){
        throw Error ('this Class cannot be instantiated.');
    }
    
    this.backbone = ('have no backbone');
    }
}
 
// Creation of subclasses to inherit from HasBonebone and NoBackbone
class Arthropoda extends Invertebrate {
    constructor (name) {
        super (name);
        this.bloodtemperature = ('poikilothermic');
        this.summary = (`${this.name} are ${this.bloodtemperature} and ${this.backbone}. Examples include Spiders and Scorpions.`);
    }
    
    // This method is being overriden here and it's made to function different from when it was first declared above.
    // This shows polymorphism.
    animals(){
        console.log('These are some animals under: Insects, Spiders and Scorpions.');
    }
}
 
class Fish extends Vertebrate {
    constructor (name) {
        super (name);
        this.bloodtemperature = ('poikilothermic');
        this.summary = (`${this.name} are ${this.bloodtemperature} and ${this.backbone}. Examples include Sharks and Eels.`);
    }
 
    animals(){
        console.log('These are some animals under Fish: Sharks, Eels and Seahorses.');
    }
 
}
 
class Amphibia extends Vertebrate  {
    constructor (name) {
        super (name);
        this.bloodtemperature = ('poikilothermic');
        this.summary = (`${this.name}s are ${this.bloodtemperature} and ${this.backbone}. Examples include Newts and Toads.`);
    }
    animals(){
        console.log('These are some animals under Amphibians: Toads, Newts and Salamandas.');
    }
}
  
 
class Reptiles extends Vertebrate  {
    constructor (name) {
        super (name);
        this.bloodtemperature = ('poikilothermic');
        this.summary = (`${this.name}s are ${this.bloodtemperature} and ${this.backbone}. Examples include Crocodiles and Turtles.`);
    }
 
    animals(){
        console.log('These are some animals under Reptiles: Lizards, Crocodiles, Turtles.');
    }
 
}
 
class Aves extends Vertebrate  {
    constructor (name) {
        super (name);
        this.bloodtemperature = ('homeothermic');
        this.summary = (`${this.name} are ${this.bloodtemperature} and ${this.backbone}. Examples include Ducks and Pigeons.`);
    }
    animals(){
        console.log('These are some animals under Aves: Chickens, Ducks and Pigeons.');
    }
}
 
class Mammalia extends Vertebrate  {
    constructor (name) {
        super (name);
        this.bloodtemperature = ('homeothermic');
        this.summary = (`${this.name}s are ${this.bloodtemperature} and ${this.backbone}. Examples include Sheep and Humans.`);
    }
 
    animals(){
        console.log('These are some animals under Mammal: Sheep, Humans and Goats.');
    }
 
}
 
 
// Instantiating Objects from the child classes above... I could create an interface for this but I've been down that road and it's slippery from all the tears
 
const arthropoda = new Arthropoda ('Arthropoda');
const fish = new Fish ('Fish');
const amphibian = new Amphibia('Amphibia');
const reptile = new Reptiles('Reptile');
const aves = new Aves('Aves');
const mammal = new Mammalia('Mammal');
 
const animalia = [arthropoda, fish, amphibia, reptile, aves, mammal];
 
// This method will show all of our objects and explain the animal kingdom.
console.log('This is a simple array on the classification of Kingdom Animalia:');
console.log('animalia');
 
 
// Use the below method to get examples of animals under any class.
mammal.animals();