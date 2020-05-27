const myPlace = "Tangerang Selatan"
const myName = "Hassan"
const myProfession = "Lecturer"

// Tanpa String Concat
let perkenalanDiri = "Halo, perkenalkan nama saya " + myName + ", berprofesi sebagai " + myProfession + " di daerah " + myPlace
console.log(perkenalanDiri)

// Menggunakan String Concat
let perkenalanDiriKedua = `Halo, perkenalkan nama saya ${myName}, berprofesi sebagai ${myProfession} di daerah ${myPlace}`
console.log(perkenalanDiriKedua)