

const people = ['Kookla','Fran','Ollie'];
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people, stuff};

// Spread and Destructuring ------------------------

let newPeople = ['Oldie', ...people, 'Garfield'];

const newStuff = {...stuff, cars: [...stuff.cars, 'Subaru']};

let newState = {...state, people: ['Oldie', ...people, 'Garfield'], stuff:{...stuff, cars:[...stuff.cars, 'Subaru']} };