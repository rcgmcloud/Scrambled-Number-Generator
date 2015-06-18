module.exports = scrambledNumberGenerator;

function scrambledNumberGenerator(n){

  if (typeof n !== 'number'){
    return [];
  }

  //set up n array
  var nArr = [];
  for(var a = 0; a < n; a++){
    nArr.push(a);
  }

  function shuffle(array) {
    var copy = [], n = array.length, i;
    // While there remain elements to shuffle…
    while (n) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * n--);
      // And move it to the new array.
      copy.push(array.splice(i, 1)[0]);
    }
    return copy;
  }

  return shuffle(nArr);
}