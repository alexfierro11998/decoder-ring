// Write your tests here!
const caesar = require("../src/caesar");
const {expect} = require("chai");
describe("caesar()", () =>{
    it("should return false when shift is zero", () => {
        expect(caesar("Thinkful", 0, true)).to.be.false
    })
    it("should return false when shift is greater than 25", () => {
        expect(caesar("Thinkful", 26, true)).to.be.false
    })
    it("should return false when shift is less than 25", () => {
        expect(caesar("Thinkful", -26, true)).to.be.false
    })
    it("should return wklqnixo", () => {
        expect(caesar("thinkful", 3)).to.equal("wklqnixo")
    })
    it("should return qefkhcri", () => {
        expect(caesar("thinkful", -3)).to.equal("qefkhcri")
    })
    it("should return bpqa qa i amkzmb umaaiom!", () => {
        expect(caesar("This is a secret message!", 8)).to.equal("bpqa qa i amkzmb umaaiom!")
    })
    it("should return this is a secret message", () => {
        expect(caesar("BPQA qa I amkzmb umaaiom!", 8, false)).to.equal("this is a secret message!")
    })
    it("should return false", () => {
        expect(caesar("thinkful")).to.be.false
    })
    it("should return false", () => {
        expect(caesar("thinkful", 99)).to.be.false
    })
})
