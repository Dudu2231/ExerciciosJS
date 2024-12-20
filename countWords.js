function countWords(string){
    let array =string.split(" ")
    let result = {}

    for (item of array){
        if (result[item]){
            result[item]++
        }
        else{
            result[item]= 1
        }
    }
    return result
}

console.log(countWords("O abacaxi abacaxi é salgado"))



