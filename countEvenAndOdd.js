
function ContarParesImpares(array){
    let result= {"Pares": 0, "Ímpares": 0}  
    for (element of array){
        if (element%2===0){
            result.Pares++
        }
        else{
            result.Ímpares++
        }
    }
    return result
}
let array = [6, 10, 20, 21, 33]

console.log(ContarParesImpares(array))