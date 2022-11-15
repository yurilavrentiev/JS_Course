const myCar = {
  name: 'Lada - Kalina',
  maxSpeed: 165,
  horsePower: 89,
  weight: 1080,
  fuelType: 'АИ-95',
  fuelCapacity: 50,
  fuelConsuming: 7,
  mileage: 5000,
  drive(km) {
    this.mileage = this.mileage + km;
    this.fuelCapacity = this.fuelCapacity - ((this.fuelConsuming * km) / 100);
    console.log(`Driving for ${km} kilometers. You now have ${this.fuelCapacity} fuel!`)
  },
  refill() {
    this.fuelCapacity = 50;
    console.log(`You have refilled the tank! The tank capacity is ${this.fuelCapacity} now`);
  },
}

myCar.drive(150);
console.log(myCar);
myCar.refill();
console.log(myCar);
