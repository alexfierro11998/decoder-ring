const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    if(!shift || shift === 0 || shift < -25 || shift > 25)return false;
    const returnString = "";
    const lowCaseInput = input.toLowerCase();
    if(encode){
      return encodeA(input, shift)
    }
    else if(!encode){
      return decodeA(input, shift)
    }
  }
  function encodeA(input, shift){
    let returnString = "";
    const lowCaseInput = input.toLowerCase();
    for(let i = 0; i < lowCaseInput.length; i++){
      const conditionalAsCode = lowCaseInput.charCodeAt(i) + shift
      if(lowCaseInput[i] === " "){
        returnString += " "
      }
      else if(lowCaseInput[i] == "!" || lowCaseInput[i] == "?"){
        returnString += lowCaseInput[i]
      }
      else if(conditionalAsCode > 122){
        returnString += String.fromCharCode(conditionalAsCode - 26)
      }
      else if(conditionalAsCode < 97){

        returnString += String.fromCharCode(conditionalAsCode + 26)
      }
      else{
        returnString += String.fromCharCode(conditionalAsCode)
      }
    }
    return returnString
  }
  function decodeA(input, shift){
    let returnString = "";
    const lowCaseInput = input.toLowerCase();
    for(let i = 0; i < lowCaseInput.length; i++){
      const condition = lowCaseInput.charCodeAt(i) - shift;
      if(lowCaseInput[i] === " "){
        returnString += " ";
      }
      else if(lowCaseInput[i] == "!" || lowCaseInput[i] == "?"){
        returnString += lowCaseInput[i]
      }
      else if(condition < 97){
        returnString += String.fromCharCode(condition + 26)
      }
      else if(condition > 122){
        returnString += String.fromCharCode(condition - 26)
      }
      else{
        returnString += String.fromCharCode(condition)
      }
    }
    return returnString;
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;