function isAnagram(string1, string2){
    const counter1= {} //inicializando os contadores de letras, nossos objetos terão como keys, letras, com values a quantidade de vezes que a letra aparece
    const counter2= {} 
    if (string1.length!==string2.length){
        return false  //caso o tamanho das strings sejam diferentes, é impossível que sejam anagramas
    }
    else{
        string1= string1.toLowerCase() //converto elas para lower case (caixa baixa)
        string2= string2.toLowerCase()
        for (let i=0; i<string1.length; i++){ //itero sobre cada letra da string
            let char1 = string1[i] //crio uma variável para armazenar as letras da string
            let char2= string2[i]
            if (counter1.hasOwnProperty(char1)){ //caso o objeto ja tenha essa propriedade(no caso, uma letra, ele adicionará mais um ao contador da respectiva letra)
                counter1[char1]++
            }
            else{
                counter1[char1]= 1 //caso a letra não exista no contador, ela será inicializada
            }
            if(counter2.hasOwnProperty(char2)){
                counter2[char2]++
            }
            else{
                counter2[char2]= 1
            }

        }
        if (areTheSame(counter1, counter2)){
            return true //caso a função diga que ambos sao iguais, então são anagramas
        }
        else{
            return false //caso sejam objetos diferentes, então não são anagramas
        }
    }
}

function areTheSame(object1, object2){ //a função recebe dois objetos para comparar
    const object1Props = Object.getOwnPropertyNames(object1) //recebo uma lista(array) de propriedades.
    const object2Props = Object.getOwnPropertyNames(object2)
    if (object1Props.length!== object2Props.length){ //caso o tamanho das listas seja diferente, então não tem a mesma quantidade de propriedades(letras), não são anagramas
        return false
    }
    else{
        for (let i= 0; i<object1Props.length; i++){ //itero sobre a lista de propriedades
            let property = object1Props[i]
            if (object1[property] !== object2[property]){ //caso a letra não exista no outro objeto, então não são iguais
                return false
            }
        }
        return true //caso ele chegue até aqui, então sao iguais
    }
    
}

console.log(isAnagram("amor", "caboclo")) //saída esperada: false