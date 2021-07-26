// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = "", encode = true) {
    if(!verifiesAlphabet(alphabet) || alphabet == undefined) return false;
    return encode ? encoder(input.toLowerCase(), alphabet) : decoder(input.toLowerCase(), alphabet)
  }
  function verifiesAlphabet(alphabet){
    let accumulator = 0;
    for(let i = 0; i < alphabet.length; i++){
      for(let j = 0; j < alphabet.length; j++){
        if(alphabet[i] === alphabet[j]) accumulator++;
      }
    }
    return (alphabet.length < 26 || accumulator > 26) ? false : true
  }
  function encoder(input, alphabet){
    const defaultAlphabet = "abcdefghijklmnopqrstuvwxyz"
    let newString = "";
    for(let i = 0; i < input.length; i++){
      newString += input[i] == " " ? " " : alphabet[defaultAlphabet.indexOf(input[i])]
    }
    return newString;
  }
  function decoder(input, alphabet){
    const defaultAlphabet = "abcdefghijklmnopqrstuvwxyz"
    let newString = "";
    for(let i = 0; i < input.length; i++){
      newString += input[i] == " " ? " " : defaultAlphabet[alphabet.indexOf(input[i])]
    }
    return newString;
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution