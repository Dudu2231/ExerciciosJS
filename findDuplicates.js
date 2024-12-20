function eliminateDuplicates(array){
   
   return Array.from(new Set(array))
}
let array= [1, 1, 2, 3 , 4]

console.log(eliminateDuplicates(array))