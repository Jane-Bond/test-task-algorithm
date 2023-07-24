function findFirstUniqueChar(word) {
  const listOfChars = word.split("");

  const charsFrequencyOfOccurrence = listOfChars.reduce((accum, curValue) => {
    let obj = {
      ...accum,
      [curValue]: accum[curValue] ? accum[curValue] + 1 : 1,
    };
    return obj;
  }, {});

  const char = Object.keys(charsFrequencyOfOccurrence).find(
    (char) => charsFrequencyOfOccurrence[char] === 1
  );

  return char;
}

function findUniqueLetter(text) {
  const textWithoutSpecialCharacters = text.replace(/\W/g, " ");

  const filtredListOfWords = textWithoutSpecialCharacters
    .split(" ")
    .filter((word) => word !== "");

  const listOfUniqueChars = filtredListOfWords.map((word) =>
    findFirstUniqueChar(word)
  );
  console.log(listOfUniqueChars);

  const stringOfUniqueChars = listOfUniqueChars.join("");

  return findFirstUniqueChar(stringOfUniqueChars);
}

const testStr =
  'The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousandlanguages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, "The Tao of Programming"';

console.log(findUniqueLetter(testStr));
