const { expect } = require("chai")
const polybius = require("../src/polybius")
// Write your tests here!
describe("polybius()", () =>{
    it("should return false due to noneven input length" , () => {
        expect(polybius("44324233521254134", false)).to.false
    })
    it("should return 4432423352125413", () => {
        expect(polybius("thinkful")).to.equal("4432423352125413")
    })
    it("should return 3251131343 2543241341", () => {
        expect(polybius("Hello world")).to.equal("3251131343 2543241341")
    })
    it("should return hello world", () => {
        expect(polybius("3251131343 2543241341", false)).to.equal("hello world")
    })
    it("should return th(i/j)nkful", () => {
        expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful")
    })
    it("should return false", () => {
        expect(polybius("44324233521254134", false)).to.be.false
    })
})