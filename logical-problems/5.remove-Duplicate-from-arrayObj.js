
const array = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
]
const duplicateRemove = Array.from(new Map(array.map(item => [item.id, item])).values());
console.log(duplicateRemove); // [ { id: 1, name: 'A' }, { id: 2, name: 'B' } ]

