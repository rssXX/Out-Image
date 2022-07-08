const getRandomIntInclusive = (min,max) => {
    if(min < 0 && max < 0){
        min = min * -1.;
        max = max * -1.;
    }else if(min < 0){min = min * -1.;}
    else if(max < 0){max = 0;}
    else if(min == max){
        return min;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const lengthOfStr = (str, len) => {
    if (str.length <= len) {
        return true
    }
    else {
        return false
    }
}

export {getRandomIntInclusive, lengthOfStr};