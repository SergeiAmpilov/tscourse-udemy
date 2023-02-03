class Vehicle63 {
  run: number;
}

class TruchVehicle63 extends Vehicle63 {
  capacity: number;
}


function convertRun<T extends Vehicle63>(vehicle: T): T {
  vehicle.run /= .62;
  return vehicle;
}


const vh63 = new TruchVehicle63();
vh63.run = 62_000;
convertRun<TruchVehicle63>(vh63);

console.log(
  vh63
);


function logId63<T extends number | string, Y>(id: T, additionalData: Y): { id: T,  data: Y } {
  console.log(id, additionalData);
  return {
    id,
    data: additionalData,
  }
}