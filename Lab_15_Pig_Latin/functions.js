const translateToPigLatin = (str) => {
    const vowels = ["a", "e", "i", "o", "u"]
    str = str.toLowerCase() 
    
    if (vowels.includes(str[0])) { // if first position of the str is a vowel
        return str + "way" // add "way" at the end
    } else { // if str begins with a consonant
        for (let i = 0; i < str.length; i++) { // find position of first vowel
            if (vowels.includes(str[i])) { // first vowel in the str is i
                return str.slice(i, str.length) + str.slice(0, i) + "ay" // remember slice is (startpt, endpt)
                // return sliced str from first vowel -> end of str + the letters sliced before the first vowel + "ay"
            } 
        }
    }
}

module.exports = { translateToPigLatin } // connect to test