// Importing Vehicle and Wheel classes
import { get } from 'http';
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';


class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie(): void {
     console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }

    override printDetails(): void {
      super.printDetails();
      console.log(`VIN: ${this.vin}`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`weight: ${this.weight}`);
      console.log(`topSpeed: ${this.topSpeed}`);
      console.log(`color: ${this.color}`);
      console.log(`wheel 1: ${this.wheels[0].getDiameter} inch tire with a ${this.wheels[0].getTireBrand} brand`);
      console.log(`wheel 2: ${this.wheels[1].getDiameter} inch tire with a ${this.wheels[1].getTireBrand} brand`);
    }
}

// Export the Motorbike class as the default export
export default Motorbike;
