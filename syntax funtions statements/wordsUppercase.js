function extractWords(str) {
    let wordsArr = [];
    let word = '';
    let delimiters = [' ', ',', '!', '?', '.', ';',
    ':', '/', '<', '>', '(', ')', '{', '}', '[', ']', 
    '"', '@', '|'];

    for (i=0; i<str.length; i++) {
        if (delimiters.includes(str[i])) {
            if (word && word != ' ') {
                wordsArr.push(word);
                word = '';
            }
        }
        else {
            word += String(str[i]).toUpperCase();
            if (i == str.length-1) {
                wordsArr.push(word);
            }
        }
    }
    
    console.log(wordsArr.join(', '));
}


extractWords('Hi, how are you?')
extractWords('hello')
extractWords('My name(first) is John! and you?')
extractWords('ivan@abv.bg')