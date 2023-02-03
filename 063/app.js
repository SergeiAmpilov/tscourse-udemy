"use strict";
class Vehicle63 {
}
class TruchVehicle63 extends Vehicle63 {
}
function convertRun(vehicle) {
    vehicle.run /= .62;
    return vehicle;
}
const vh63 = new TruchVehicle63();
vh63.run = 62000;
convertRun(vh63);
// convertRun(vh63);
console.log(vh63);
