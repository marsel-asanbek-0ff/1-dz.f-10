function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  const text = 'loremipsumdolor';
  const character = 'o';
  const result = countChar(text, character);
  
  console.log(`Символ ${character} встречается ${result} раз(а).`);
  