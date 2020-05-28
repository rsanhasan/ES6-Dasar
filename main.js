//ES5
function addProduct(name, category) {
    return {
        name: name,
        category: category
    }
}

console.log(addProduct("Susu", "Minuman"))

// ES6
function addService(name, category) {
    return {
        name,
        category
    }
}
console.log(addService("Instalasi Jaringan", "Networking"))