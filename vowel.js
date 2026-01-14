function vowel (arr){
    const vowels = {
        97 : "a",
        101 : "e",
        105 : "i",
        111 : "o",
        117 : "u"


    };
    return arr.map(num => vowels[num]|| num);
}
console.log(vowel([100,120,97,111,117]))