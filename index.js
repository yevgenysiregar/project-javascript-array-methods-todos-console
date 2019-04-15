const todos = ["Do morning run", "Eat lunch outside", "Go Home"];

todos.map(function(showTodos, index) {
  console.log(`${index + 1}. ${showTodos}`);
});

const routine = ["Do morning run", "Eat lunch outside", "Go Home"];

console.log(
  routine.filter(function(searchRoutine) {
    return searchRoutine.length > 7;
  })
);
const myTodos = [
  {
    id: 1,
    text: "Do morning run",
    favorite: false,
    completed: true
  },
  {
    id: 2,
    text: "Eat lunch outside",
    favorite: true,
    completed: true
  },
  {
    id: 3,
    text: "Go home",
    favorite: true,
    completed: false
  }
];

// const showMyTodos = function(info) {
//   for (let index = 0; index < info.length; index++) {
//     const piece = info[index];

//     let infoString = ``;

//     infoString += piece.completed ? `☑ ` : `☐ `;
//     infoString += `${piece.text}`;
//     infoString += piece.favorite ? ` ★` : ``;

//     console.log(infoString);
//   }
// };
// showMyTodos(myTodos);

myTodos.map(function(todosData) {
  const info = todosData;
  let infoString = ``;
  infoString += info.completed ? `☑ ` : `☐ `;
  infoString += `${info.text}`;
  infoString += info.favorite ? ` ★` : ``;

  console.log(infoString);
});

// const searchTodos = function(facts, searchText) {
//   let newSearch = [];

//   for (let index = 0; index < facts.length; index++) {
//     const thing = facts[index];

//     const lowerCaseThing = thing.text.toLowerCase();
//     const lowerCaseSearchText = searchText.toLowerCase();

//     if (lowerCaseThing.includes(lowerCaseSearchText)) {
//       newSearch.push(thing);
//     }
//   }
//   return newSearch;
// };
// const foundMyTodos = searchTodos(myTodos, "Go");
// console.log(foundMyTodos);

console.log(
  myTodos.find(function(searchTodos) {
    return searchTodos.id === 2;
  })
);
