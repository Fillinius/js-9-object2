const giveTalonsInOrder = (people, ordersArr) => {
  const sortArr = []

  for (let i = 0; i < ordersArr.length; i++){
      for (let j = 0; j < people.length; j++) {
          if (ordersArr[i] === people[j].id) {
              sortArr.push(people[j])
          }
      }
  }
  return sortArr
}
console.log(giveTalonsInOrder(people, ordersArr))

// const ordersArr = [4, 2, 1, 3];
// const people = [
//     { id: 1, name: "Максим" },
//     { id: 2, name: "Николай" },
//     { id: 3, name: "Ангелина" },
//     { id: 4, name: "Виталий" },
// ];

// const giveTalonsInOrder = (people, ordersArr) => {
//     let newObj = people.sort((a,b) => {
//         return ordersArr.indexOf(a.id) - ordersArr.indexOf(b.id)
//     })

//     return newObj
// }

// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);