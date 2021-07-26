// Write your tests here!
const substitution = require("../src/substitution")
const {expect} = require("chai")
describe("substitution", () =>{
    it("should return false if substitution alphabet is missing", () => {
        expect(substitution("message")).to.be.false
    })
    it("should return message", () => {
        expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.equal("message")
    })
    it("should return jrufscpw", () => {
        expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal("jrufscpw")
    })
    it("should return elp xhm xf mbymwwmfj dne", () => {
        expect(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.equal("elp xhm xf mbymwwmfj dne")
    })
    it("should return thinkful", () =>{
        expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.equal("thinkful")
    })
    it("should return y&ii$r&", () => {
        expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to.equal("y&ii$r&")
    })
    it("should return false", () => {
        expect(substitution("thinkful", "short")).to.be.false
    })
    it("should return false", () => {
        expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to.be.false
    })
})