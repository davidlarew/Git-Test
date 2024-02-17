class Vehicle {
    constructor(make, model) {
      this.make;
      this.model;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, numberOfDoors) {
      super(make, model);
      this.numberOfDoors = numberOfDoors;
    }
    
   describeCar() {
     return `this car is a ${this.numberOfDoors}-door ${this.make} ${this.model}`;
   }
  }
  
  const car = new Car("Honda", "Civic", 4);
  
  //uncomment this code to test:
  console.log(car.describeCar()); // Output: This car is a 4-door Honda Civic.

  class Vehicle {
    constructor(make, model) {
      this.make;
      this.model;
    }
  }
  
  class Car extends Vehicle {
     constructor(make, model, numberOfDoors) {
       super(make, model);
       this.numberOfDoors = numberOfDoors;
    }
    //add a method to describe the car
    describeCar(){
      return `This car is a ${this.numberOfDoors} - door ${this.make} ${this.model}`
    }
  }
  
  const car = new Car("Honda", "Civic", 4);
  
  //uncomment this code to test:
  console.log(car.describeCar()); // Output: This car is a 4-door Honda Civic.