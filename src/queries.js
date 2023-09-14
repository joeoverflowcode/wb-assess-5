import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 2
export const query1 = Human.findByPk(2);
// const q1 = async() => {
//     let res = await query1
//     console.log(res)
// }
// q1()

// Get the first animal whose species is "fish"
export const query2 = Animal.findByPk(5);
// const q2 = async() => { 
//     let res = await query2
//     console.log(res)
// }
// q2()

// Get all animals belonging to the human with primary key 5
export const query3 = await Animal.findAll({ where: { human_id: 5}})

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = await Animal.findAll({ where: {birth_year: {[Op.gt]: 2015}}})

// Get all the humans with first names that start with "J"
export const query5 = await Human.findAll({ where: {human_id: {[Op.between]: [2,6]}}})

// Get all the animals who don't have a birth year
export const query6 = await Animal.findAll({ where: {birth_year: null}})


// Get all the animals with species "fish" OR "rabbit"
export const query7 = await Animal.findAll({
    where: {
      [Op.or]: [
        { species: 'fish' },
        { species: 'rabbit' }
      ]
    }
  })

// await Animal.findAll({ where: {animal_id: {[Op.between]: [5,7]}}})

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = Human.findAll({
    where: {
      email: {
        [Op.notLike]: '%gmail%'
      }
    }
  })

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
//Complete the function printHumansAndAnimals so it returns a directory of humans and their animals.
// export async function printHumansAndAnimals(human) {
//     const animals = await human.getAnimals()
    
//     return animals.map((a) => a.name)
// }

export async function printHumansAndAnimals(human) {
  
  const allHumans = await Humans.findAll();
  console.log(allHumans)

  // console.log(allHumans.map((a) => a.name))


  // const animalsOwnedByHuman = await human.getAnimals();

  // return animalsOwnedByHuman.map((animal) => animal.name);

  //async function getEmployeeNames(dept) {
  // const emps = await dept.getEmployees();
  // return emps.map((e) => e.name);
}


// console.log(animalsOwnedByHuman.map((animal) => animal.name)

//Complete the function getHumansByAnimalSpecies. 
//This function should return a Set containing the full names of humans who own animals of the given species.
// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {
//     // const humans = new Set()
//     // humans.add(humanName)
//       const dogOwners = new Set()
    
//       for (let human of humans) {
//         if (human.animals.includes(species)) {
//           dogOwners.add(humanName);
//         }
//       }
    
//console.log(await getHumansByAnimalSpecies('dog'))
    
}
