function sortByLength (array){
    
    return array.sort((a, b)=> a.length  - b.length )
}


let array = ["batata", "fé", "barco"]
console.log(sortByLength ((array)))

