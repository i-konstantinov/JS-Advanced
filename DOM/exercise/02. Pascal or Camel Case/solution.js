function solve() {
  const output = document.getElementById('naming-convention').value; 
  const wordsArr = document.getElementById('text').value.split(' ');
  const result = document.getElementById('result').textContent;

  if (output != "Camel Case" && output != 'Pascal Case') {
    result = 'Error!';
  }
  else {
    let text = '';
    
    for (let i=0; i<wordsArr.length; i++) {
      let firstLetter = wordsArr[i][0];
      let otherLetters = wordsArr[i].slice(1);
      text += firstLetter.toUpperCase() + otherLetters.toLowerCase();
    }
    
    if (output == "Camel Case") {
      text = text[0].toLowerCase() + text.slice(1);
    }
    result = text;
  }
}
