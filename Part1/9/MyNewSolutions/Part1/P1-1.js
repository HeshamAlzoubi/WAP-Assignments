let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1) true, taken from rabbit.

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2) null, taken from animal.

delete animal.jumps;

alert( rabbit.jumps ); // ? (3) undefined, there’s no such property any more.