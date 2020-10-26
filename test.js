const phrase = 'aabbbbcc'

function isEqualOrCanRemoveOneToMatch(amountA, amountB) {
  return Boolean(amountB >= (amountA) && amountB <= (amountA + 1));
}

function compareOccurrences(occurrences) {
  const lettersAmount = Object.values(occurrences);

  lettersAmount.map((amountA) =>
    lettersAmount.map(amountB =>
      isEqualOrCanRemoveOneToMatch(amountA, amountB)
    ).includes(false)
  )
}

function checkPhrase(phrase) {

  const occurrences = [...phrase].reduce((accumulator, letter, index) => {
    return ({
      ...accumulator,
      [letter]: accumulator[letter] ? (accumulator[letter] + 1) : 1
    })
  }, {})
  

  const isOkOccurrences = compareOccurrences(occurrences);
  
  const wrongOccurrencesAmount = isOkOccurrences.filter(item => !item).length;
  
  const isOkOrCanRemoveALetter = wrongOccurrencesAmount > (isOkOccurrences.length / 2);

  return isOkOrCanRemoveALetter;
}

console.log(checkPhrase(phrase))
// solved at 17:52 (26 out.)

