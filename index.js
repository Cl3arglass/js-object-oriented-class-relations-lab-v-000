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

    trips() {
      return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this))
      };

    passengers() {

      let result = []
      this.trips().forEach(
               function(trip) {
                   result.push(trip.passenger())
               }.bind(this))
        return result

      };


  }

class Passenger {
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;

        store.passengers.push(this);
    }

    trips() {
      return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this))
      };

    drivers() {

      let result = []
      this.trips().forEach(
               function(trip) {
                   result.push(trip.driver())
               }.bind(this))
        return result

      };

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
      return store.passengers.find(
              function(passenger) {
                  return passenger.id === this.passengerId;
              }.bind(this))

      };

    driver() {
      return store.drivers.find(
              function(driver) {
                  return driver.id === this.driverId;
              }.bind(this))

      };


  }
