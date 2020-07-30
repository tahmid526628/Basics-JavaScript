// rest operator

function restOpSum(...args){
    return args.reduce((a, b) => {return a + b})
}

console.log(restOpSum(2,5,1,2))

// reduce() method take an array and convert it to a single value


const restOpSub = (...args)=>{
    return args.reduce((a, b) => {
        return a-b
    })
}

console.log(restOpSub(175, 50, 25))


// spread operator

let month = ["JAN", "FEB", "MAR", "APR", "MAY"]
let month2 = []
function spreadOp(){
    //month2 = month // this line change month2 also
    // but we changed just month and we want to make a
    // copy of month
    
    month2 = [...month]
    // now it just change the month not month2
    month[0] = "HabiJabi"
    console.log(month)
    return month2
}

console.log(spreadOp())

