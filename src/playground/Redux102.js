const person = {
    sname: 'babulal',
    age: 22,
    location: {
        city: 'Kathmandu',
        temp: 35
    }
}

const { sname, age } = person
console.log(`I am ${sname}  i am ${age} years old`);

const { city, temp } = person.location
if (city && temp) {
    console.log(`${city} and temp ${temp}`)
}