let store = { drivers: [], trips: [], passengers: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;

        store.drivers.push(this);
    }


  }

class Passenger {
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;

        store.passengers.push(this);
    }
  }

class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId;
        if (passenger) {
            this.passengerId = passenger.id;
        }
        if (driver) {
            this.driverId = driver.id;
        }

        store.trips.push(this);
    }

    passenger() {
      // return store.passengers.find(
      //         function(passenger) {
      //             return passenger.id === this.passengerId;
      //         }.bind(this)
        }
      };


  }
