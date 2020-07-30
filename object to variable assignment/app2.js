// assignment from array to var

const [w, x, y, , ,z] = [1, 5, 75, 6, 8, 7, 9, 3]
console.log(w, x, y, z)

// here we put empty space and this empty space skip the value
// from correspoding index


// again

let a = 8, b = 10
let [aN, bN] = [b, a]

console.log(aN)
console.log(bN)


// using rest operator
let prev = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function removeFirstTwo(prev){
    const [ , , ...newArr] = prev
    return newArr
}

console.log(prev)
console.log(removeFirstTwo(prev))


// that's it for now
// tata

