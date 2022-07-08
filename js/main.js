import {getRandomIntInclusive, lengthOfStr} from "./util.js"
import {addComment, arr, descriptions} from "./data.js"
import {render} from "./picture.js"
import {} from "./big-picture.js"

for (let i = 1; i <= 25; i++){
    arr.push({
        id: i,
        url: i,
        description: descriptions[getRandomIntInclusive(0,6)],
        likes: getRandomIntInclusive(15,200),
        comments: addComment()
    });
}

console.log(arr);
console.log(lengthOfStr("12", 2))
render();
export {arr};