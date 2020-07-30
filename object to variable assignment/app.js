// assignment from object to var

const temperature = {
    today: 35.25,
    yesterday: 32.56,
    tomorrow: 37.32
}

const getTemp = (temp) =>{
    const {yesterday : getYesterdayTemp, today : getTodayTemp} = temperature
    return {
        first: getTodayTemp,
        second: getYesterdayTemp
    }
}

console.log(getTemp(temperature).first + "\n" + getTemp(temperature).second)


// here getYesterdayTemp and getTodayTemp is the new constant variable
// the line 8 take the value of a property from the temperature obj
// and put it to the new one
// then I return a object for multiple return values


// we can also assign from nested object
// let's have a look
const local_temperature = {
    today: {min: 35.25, max: 50},
    yesterday: 32.56,
    tomorrow: 37.32
}

const GetLocalTemp = (temp) =>{
    const {today : {max : getTodayMaxTemp}} = local_temperature
    return getTodayMaxTemp
}

console.log("It's Today's MAX temperature: " + GetLocalTemp(local_temperature))


// that's it for now
// tata