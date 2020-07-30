let shopList = [["banana", 30], ["apple", 100], ["potato", 50], ["chicken", 200]]
// it is a multi dimension array that is a list

function DoPush(){
    shopList.push(["beef", 500])
    console.log("After pushing: \n" + shopList + "\n")
}

function DoPop(){
    let shopItem = shopList.pop()
    console.log("Pop item: " + shopItem)
    console.log("After popping: \n" + shopList + "\n")
}

function DoShift(){
    let shopItem = shopList.shift()
    console.log("Shift item: " + shopItem)
    console.log("After shifting: \n" + shopList + "\n")
}

function DoUnshift(){
    shopList.unshift(["meat", 700])
    console.log("After unshifting: \n" + shopList + "\n")
}

DoPush() // last entry
DoPop() // delete last
DoShift() // delete first
DoUnshift() // first entry




