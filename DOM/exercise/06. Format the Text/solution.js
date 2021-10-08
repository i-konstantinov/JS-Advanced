function solve() {
  const textArr = document.getElementById('input').value.split('.').filter(el => el != '');
  
  let result = '';
  let paragraph = [];
  let counter = 0;

  for (let i=0; i<textArr.length; i++) {
    counter ++;
    paragraph.push(textArr[i]);
    if (counter == 3) {
      counter = 0;
      let text = paragraph.join('.');
      result += `<p>${text}.</p>`;
      paragraph = [];
    }
  }
  if (paragraph.length > 0) {
    let missedText = paragraph.join('.');
    result += `<p>${missedText}.</p>`;
  }

  document.getElementById('output').innerHTML = result;
}  
