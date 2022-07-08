import {getRandomIntInclusive} from "./util.js"

let names = ['Сергей','Артем','Илья','Антон','Артур','Игорьь']
let descriptions = ['Машина','Цветок','ржавое ведро','стекло','компьютер','бездомный','лавочка']
let messages = ['клево','Круто','ниче так','норм','плохо','Машина зверь',' Анилибрия',]
let arr = []

const createUniqueId = (min, max, array) =>{
    let num = getRandomIntInclusive(min,max);
    let numberOfRepetitions = false;
    for (let i = 0; i < array.length; i++){
        if (array[i].id == num){
            numberOfRepetitions = true;
        }
    }
    if (numberOfRepetitions == true){
        return createUniqueId(min, max, array);
    }
    else{
        return num;
    }
}
const addComment = () => {
    let comm = [];
    for (let i = getRandomIntInclusive(0,5), j = 0; j < i; j++){
        comm.push({
            id: createUniqueId(0, 125, comm),
            avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
            message: messages[getRandomIntInclusive(0,6)],
            name: names[getRandomIntInclusive(0,5)]
        })
    }
    return comm;
}

export {addComment, arr, descriptions}