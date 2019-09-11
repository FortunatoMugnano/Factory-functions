/* Lighting exercise 1 */

const doctors = [
    {
    name: "Guillari Giulio",
    speciality: "cardiologist",
    address: "Via Antonino pio 20, 80126 Napoli"
},
]

const createDoctor = (name, speciality, address) => {
    return {
        name: name,
        speciality: speciality,
        address: address
    }

}

const newDoctor = createDoctor("Erin Rodgers", "Pediatrician", "Nashville, Tn")


console.log("new doctor", newDoctor)

doctors.push(newDoctor);
console.log("List of doctors", doctors)

/* Lighting exercise 2 */


const createPets = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

const BowWowKennels = []

const molly = createPets("Molly", "YorkiePoodle")
const george = createPets("George", "Hunting Doog")
const finch = createPets("Finch", "Labrador")

BowWowKennels.push(molly, george, finch)

console.table("My pets", BowWowKennels)