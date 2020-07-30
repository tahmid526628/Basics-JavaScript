const person = {
    name: 'Tahmid Khandokar',
    dept: 'CSE'
}
const greeting = `Hello! I'm ${person.name}.
I'm doing BSc in ${person.dept}`

console.log(greeting)


//let's do some more complex

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
}

function makeList(arr){
    const resultDisplayArr = [];
    for(let i=0; i<arr.length; i++){
        resultDisplayArr.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArr
}

console.log(makeList(result.success))