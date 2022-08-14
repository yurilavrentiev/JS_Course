
let str = 'rhinoceros'

let vow = 'aeiouy'

//function vowAndCons(){

let word = {
    vowels: 0 ,
    consonants: 0
};

let count = 0;
    for ( i=0; i<str.length; i++){
        for ( j=0; j<vow.length;j++){

            if (str[i]==vow[j]){
            
            count ++
             }
        }   
    }

word.vowels = count
word.consonants = (str.length - word.vowels)

//}

//function vowAndCons()
console.log(word)



//не работает с функцией. когда ее комментирую - работает. что не так?                                                                         ;(



