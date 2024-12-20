function findMax(array){
    let maxValue = Math.max(...array)
    return maxValue
}
let values = [1, 2, 3, 5, 6, 22]

console.log(findMax(values))