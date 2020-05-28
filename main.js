// get element from html
const listAngka = [1, 2, 3, 5, 7];

// menggunakan forEach
// forEach tidak return value
const listForEach = listAngka.forEach((angka) => {
    return angka * angka;
})

console.log(listForEach)

// menggunakan map
// Map bisa return value
const listMap = listAngka.map((angka) => {
    return angka * angka
})

console.log(listMap)

// Final Thoughts
// As always, the choice between map() and forEach() will depend on your use case. If you plan to change, alternate, or use the data, you should pick map(), because it returns a new array with the transformed data.
// But, if you won't need the returned array, don't use map() - instead use forEach() or even a for loop.