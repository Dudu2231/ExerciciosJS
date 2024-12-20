function findLostValue(array){
    for (let i= 0; i<array.length; i++){
        if (array[i]+1 !== array[i+1]){
            return array[i]+1
        }
    }
}

let array= [1, 2, 4, 5, 6]
console.log(findLostValue(array))