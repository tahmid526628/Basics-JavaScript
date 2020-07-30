// object ba array k const diye declare korleo take immutable 
// kora jaay na. hoyto fully assign kora jaay na but 
// tar element or property gulo change kora jaay thik e
// r tai object ba array k freeze kore dite


function freezeObj(){
    const MATH_CONST = {
        PI : 3.1416
    }

    Object.freeze(MATH_CONST) // here freeze the object, so it can't be changed

    try{
        MATH_CONST.PI = 50
    }catch(ex){
        console.log(ex)
    }

    return MATH_CONST.PI
}


const pi = freezeObj()
console.log(pi)