
let str = 'rhinoceros'
let vow = 'aeiouy'

function vowAndCons(string){
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y'];
let vowels = 0;
let consonants = 0;
for (symbol of string) {
    if (VOWELS.includes(symbol)) {
        vowels += 1;
    } else {
        consonants += 1;
    }
}
    return ({
        vowels,
        consonants
    });
}  
console.log(vowAndCons(str));



// word.vowels = count
// word.consonants = (str.length - word.vowels)

//}

//function vowAndCons()
// console.log(word)



//не работает с функцией. когда ее комментирую - работает. что не так?                                                                         ;(



