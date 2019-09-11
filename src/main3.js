const jumpStop = []
const chattenRecord = []
const polarRecords = [] 

const createFunkArtist = (name, age) => {
    return {
        name: name,
        age: age,
        genre: "Funk"
    }
}
const createRapArtist = (name, age) => {
    return {
        name: name,
        age: age,
        genre: "Rap"
    }
}
const createCountryArtist = (name, age) => {
    return {
        name: name,
        age: age,
        genre: "Country"
    }
}
const createBluegrassArtist = (name, age) => {
    return {
        name: name,
        age: age,
        genre: "Bluegrass"
    }
}
const createPopArtist = (name, age) => {
    return {
        name: name,
        age: age,
        genre: "Pop"
    }
}

const dreFunk = createFunkArtist("Dre Funkz", 25)
const dustaGrimes = createRapArtist("Dusta Grimes", 21)
const bruceAtikins = createCountryArtist("Dusta Grimes", 23)
const jensenBrown = createPopArtist("Jensen Brown", 20)
const bartDanielson = createBluegrassArtist("Bartholomew Danielson", 23)
const avileeDallas = createCountryArtist("Avilee Dallas", 19)
const AustinKinkaid = createPopArtist("Austin Kinkaid", 22)
const LoyoncéBranis = createRapArtist("Loyoncé Branis", 27)

jumpStop.push(dreFunk,dustaGrimes, LoyoncéBranis)
chattenRecord.push(bruceAtikins, bartDanielson, avileeDallas)
polarRecords.push(jensenBrown, AustinKinkaid)


console.log("Different discographic labels", jumpStop, chattenRecord, polarRecords)