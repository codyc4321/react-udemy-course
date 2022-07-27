// #87

class Car {
  setDriveSound(sound) {
    this.sound = sound;
  }

  drive() {
    return this.sound;
  }
}

const car = new Car();
car.setDriveSound('vroom');
car.drive();


const truck = {
  sound: 'putputput',
  driveMyTruck: car.drive
}


truck.driveMyTruck()
