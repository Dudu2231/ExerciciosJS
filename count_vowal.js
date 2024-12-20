function countVowel(string){
    let vowels = "AEIOU"
    let result= {"A":0, "E":0, "I": 0, "O": 0, "U":0}

    for (let char of string.toUpperCase()){
        if(vowels.includes(char)){
            result[char]++
        }
    }
    return result
}

console.log(countVowel("Ribeirao"))