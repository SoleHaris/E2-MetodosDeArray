//Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

//TODAS  las respuestas deben ser USER-FRIENDLY. 
//Si (como en el punto B), la respuesta es un booleano (true o false, hay o no hay), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo).

//Manejemos cada respuesta, pensando en que un usuario promedio va a leer eso. 

//Un ejemplo de lo que sería una repuesta "user-friendly": "La pizza X, tiene un valor de $XXXX”. 


const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//a) Las pizzas que tengan un id impar.

console.log ("a) Las pizzas que tienen un id impar son:");
console.log (" ");

const pizzasIdImpar = pizzas.filter ( (pizza) => {
  if (pizza.id % 2 == 1) {
    console.log(` (id: ${pizza.id}) - ${pizza.nombre}: 
    Ingredientes: ${pizza.ingredientes.join(", ")}.`);
  } 
});

console.log (" ");
console.log ("...");
console.log (" ");

//b) Responder: ¿Hay alguna pizza que valga menos de $600?
console.log ("b) ¿Hay alguna pizza que valga menos de $600?");
console.log (" ");

const pizzaEconomica = pizzas.some ( (pizza) => {
  if (pizza.precio < 600) {
    console.log (`Sí, la ${pizza.nombre} que vale $${pizza.precio}.-`)
  }
});

console.log (" ");
console.log ("...");
console.log (" ");

//c) El nombre de cada pizza con su respectivo precio.

console.log ("c) El nombre de cada pizza con su respectivo precio:");
console.log (" ");

const pizzasYPrecios = pizzas.forEach ( (pizza) => {
  console.log (`${pizza.nombre} - Precio: $${pizza.precio}.-`);
});

console.log (" ");
console.log ("...");
console.log (" ");

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

console.log ("d) Todos los ingredientes de cada pizza:");
console.log (" ");

const pizzasEIngredientes = pizzas.map ( (pizza) => {
  return console.log (`La ${pizza.nombre} tiene: ${pizza.ingredientes.join(", ")}.`);
});

console.log (" ");
console.log ("...");
console.log (" ");