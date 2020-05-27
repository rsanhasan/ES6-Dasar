const listSmartphone = ['Samsung', 'Xiaomi', 'Nokia', 'Oppo']

// Var
// dengan Var, maka nilainya bersifat global
for (var i = 0; i < listSmartphone.length; i++) {
    console.log(listSmartphone[i])
}

console.log(`Bisa tahu nilai i adalah ${i}`)

// Dengan Let
// dengan Let, maka nilainya terbatas pada scope
for (let j = 0; i < listSmartphone.length; i++) {
    console.log(listSmartphone[i])
}

console.log(`Gak bisa tahu nilai dari j adalah ${j}`)