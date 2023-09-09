--Problem 1
cupcakes=# SELECT email FROM customers ORDER BY email ASC;

--Problem 2
SELECT id FROM orders WHERE customer_id IN (SELECT id FROM customers WHERE fname= 'Elizabeth' AND lname = 'Crocker');

--Problem 3
cupcakes=# SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'false';


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