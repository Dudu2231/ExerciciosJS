function multiply(array){
    let result = 1
    for (element of array){
        result*= element
    }
    return result
}

let array = [4, 5, 10]

console.log(multiply(array))