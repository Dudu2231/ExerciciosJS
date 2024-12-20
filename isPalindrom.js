function isPalindrom(value){
    value= value.toString()
    reversedStr= value.split("").reverse().join("")
    return value==reversedStr? true: false
}

string= 222
console.log(isPalindrom(string))