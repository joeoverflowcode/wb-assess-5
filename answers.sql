--Problem 1
SELECT email FROM customers ORDER BY email ASC;

--Problem 2
SELECT id FROM orders WHERE customer_id IN (SELECT id FROM customers WHERE fname= 'Elizabeth' AND lname = 'Crocker');

--Problem 3
SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'false';


--Problem 4

SELECT c.name, SUM(o.num_cupcakes) 
AS sum
FROM cupcakes c 
LEFT JOIN orders o 
ON c.id = o.cupcake_id 
GROUP BY c.name 
ORDER BY c.name 
ASC;

--Problem 5
SELECT c.email, SUM(o.num_cupcakes) AS total
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.email
ORDER BY total DESC;


--Problem 6
SELECT DISTINCT c.fname, c.lname, c.email
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
INNER JOIN cupcakes cp ON o.cupcake_id = cp.id
WHERE cp.name = 'funfetti' AND o.processed = TRUE;


-- Step 2 Queries
--Query 1

const emp2 = await Human.findByPk(2);
{ human_id: 2, fname: 'Jane', lname: 'Doe', email: 'jdoe@gmail.com' }
console.log(emp2)

--Query 2
 const animal5 = await Animal.findByPk(5)
 console.log(animal5)
{
  animal_id: 5,
  name: 'Bubbles',
  species: 'fish',
  birth_year: null,
  human_id: 4
}

--Query 3

> await Animal.findAll ({
... where: { human_id: 5 }
... });
Executing (default): SELECT "animal_id", "name", "species", "birth_year", "human_id" FROM "animals" AS "animal" WHERE "animal"."human_id" = 5;
[
  {
    animal_id: 7,
    name: 'Bugs',
    species: 'rabbit',
    birth_year: 2016,
    human_id: 5
  },
  {
    animal_id: 9,
    name: 'Buster',
    species: 'dog',
    birth_year: 2011,
    human_id: 5
  },
  {
    animal_id: 10,
    name: 'Twinkie',
    species: 'dog',
    birth_year: 2014,
    human_id: 5
  }
]

--Query 4
import { Op } from 'sequilize'

await Animal.findAll({
    where: { birth_year: {[Op.gt]: 2015}
    }
})