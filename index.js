// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}
const drivers = ["Ada", "John", "adam", "Mary"];
console.log(findMatching(drivers, "ada"))
function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()));
}
const drivers1 = ["Ada", "John", "adam", "Mary"];
console.log(fuzzyMatch(drivers1, "a"));

function matchName(drivers, name) {
  
  let matchedDrivers = [];


  for (let i = 0; i < drivers.length; i++) {
    const driver = drivers[i];

    if (driver.name === name) {
      matchedDrivers.push(driver);
    
    }
  }

  
  return matchedDrivers;
}
