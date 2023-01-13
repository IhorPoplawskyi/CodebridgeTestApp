export const higlight = (str: string, words: string) => {
  let keywords = words.split(' ').map(el => el.toLowerCase())
  let result = '';
  const splitString = str.split(/[\s,:-]/);
  for (let i = 0; i < splitString.length; i++) {
    if (keywords.includes(splitString[i].toLowerCase())) {
      result += `<span class='highlited'>${splitString[i]}</span>` + ' '
    } else {
      result += splitString[i] + ' ';
    }
  }
  return result;
}