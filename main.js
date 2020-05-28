// get element from html
const listFoods = ["Kebab", "Pizza", "Nasi Kebuli"];
// Menampilkan data yang ada di listFood

// Menggunakan filter
const Foods = listFoods.filter((food) => {
    // Melakukan filter untuk data yang memiliki value selain Pizza
    return food !== "Pizza";
    // Maka hasilnya adalah ["Kebab",Nasi Kebuli"]
})

console.log(Foods)