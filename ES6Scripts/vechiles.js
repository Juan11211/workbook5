let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7
    },
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("5-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5
    }
   ];
  
// Which vehicles are RED?

const redCars = vehicles.filter((cars) => cars.color === "Red");
const results1 = redCars.map((cars) => cars.type);

console.log(results1)
// Which vehicles have registrations that are expired?

let currentDate = new Date();

const expired = vehicles.filter((vehicle) => vehicle.registrationExpires < currentDate);

const results2 = expired.map((vehicle) => vehicle.type);

console.log(`These vehicles are expired: ${results2}`);

// Which vehicles that hold at least 6 people?

const holdsEnough = vehicles.filter((vehicle) => vehicle.capacity >= 6);
const results3 = holdsEnough.map((vehicle) => vehicle.type);

console.log(`These vechiles can hold up to more than 6 ${results3}`)

// Which vehicles have license plates that end with "222"?

const endsin222 = vehicles.filter((vehicle) => vehicle.licenseNo.indexOf("222") !== -1)
const results4 = endsin222.map((vehicle) => vehicle.type);

console.log(`These vechiles license ends in 222 ${results4}`)