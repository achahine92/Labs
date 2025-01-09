const { translateToPigLatin } = require("./functions")

describe("translateToPigLatin()", () => {
    it(`takes in 'pickle' and returns 'icklepay'`, () => { // regular consonant
        expect(translateToPigLatin("pickle")).toEqual("icklepay")
    })
    it(`takes in 'Mississippi' and returns 'ississippimay'`, () => { // capitalized word
        expect(translateToPigLatin("Mississippi")).toEqual("ississippimay")
    })
    it(`takes in 'ocean' and returns 'oceanway'`, () => { // starts with a vowel
        expect(translateToPigLatin("ocean")).toEqual("oceanway")
    })
    it(`takes in 'crank' and returns 'ankcray'`, () => { // starts with 2 consonants
        expect(translateToPigLatin("crank")).toEqual("ankcray")
    })
    it(`takes in 'string' and returns 'ingstray'`, () => { // starts with more than 2 consonants
        expect(translateToPigLatin("string")).toEqual("ingstray")
    })
    it(`takes in 'oat' and returns 'oatway'`, () => { // starts with two vowels
        expect(translateToPigLatin("oat")).toEqual("oatway")
    })
    it(`takes in 'yonder' and returns 'onderyay'`, () => { // starts with y
        expect(translateToPigLatin("yonder")).toEqual("onderyay")
    })
})