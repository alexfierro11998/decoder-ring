// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // your solution code here
    if(!(checksForValidity(input)))return false
    const revisedAlphabet = createAlphabet();
    return encode ? encoder(input.toLowerCase(), revisedAlphabet) : decoder(input.toLowerCase(), revisedAlphabet)
  }
  function createAlphabet(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let accu = 0;
    let arrayContainingAscii = [];
    for(let i = 1; i < 6; i++){
      for(let j = 1; j < 6; j++){
        if(alphabet[accu] == "i"){
          arrayContainingAscii.push({[`(${alphabet[accu]}/${alphabet[accu+1]})`]: `${j}${i}` })
          accu+=2
        }else{
        arrayContainingAscii.push({[`${alphabet[accu]}`]: `${j}${i}`})
        accu++
        }
      }
    }
    return arrayContainingAscii
  }
  function encoder(input, alphabet){
    let newString = "";
    for(let i = 0;i < input.length; i++){
      if(input[i] == " ")newString += " "
      alphabet.forEach(alpha => {
        if(Object.keys(alpha)[0].length > 1 && (input[i] == "i" || input[i] =="j"))newString += Object.values(alpha)[0]
        else if(Object.keys(alpha)[0] == input[i])newString += (Object.values(alpha)[0])
      })
    }
    return newString
  }
  function decoder(input, alphabet){
    let newString = "";
    for(let i = 0; i < input.length; i+=2){
      if(input[i] ==  " "){
        newString += " "
        i--
        continue
      }
      alphabet.forEach(alpha => {
        if(Object.values(alpha)[0] == `${input[i]}${input[i+1]}`)newString += (Object.keys(alpha)[0])
      })
    }
    return newString;
  }
  function checksForValidity(input){
    let accu = 0;
    for(let i = 0; i < input.length; i++){
      if(input[i] == " ")accu++
    }
    return ((input.length - accu) % 2) ? false : true
  }
  console.log(polybius("4432423352125413", true))
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
