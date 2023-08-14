const findTheOldest = function (listOfPeople) {
  let currentYear = new Date().getFullYear();
  listOfPeople.reduce((previousPerson, currentPerson) => {
    let age = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    if (isNaN(age)) {
        currentPerson.age = currentYear - currentPerson.yearOfBirth;
    } else {
      currentPerson.age = age;
    }
  }, 0);
  listOfPeople.sort((personA, personB) => {
    if (personA.age > personB.age) {
      return -1;
    } else return 1;
  });
  console.table(listOfPeople);

  for (let person in listOfPeople) {
    return listOfPeople[person];
  }
};
// Do not edit below this line
module.exports = findTheOldest;
