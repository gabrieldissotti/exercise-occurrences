const phrase = 'aabbbbcc'

function checkPhrase(phrase) {

  const occurrences = [...phrase].reduce((accumulator, letter, index) => {
    return ({
      ...accumulator,
      [letter]: accumulator[letter] ? (accumulator[letter] + 1) : 1
    })
  }, {})

  const amount = Object.values(occurrences);

  const isOkOccurrences = amount.map((item) =>
    amount.map(subitem =>
      Boolean(subitem >= (item) && subitem <= (item + 1)
      )).includes(false));
  
  const wrongOccurrencesAmount = isOkOccurrences.filter(item => !item).length;
  
  const isOkOrCanRemoveALetter = wrongOccurrencesAmount > (isOkOccurrences.length / 2);

  return isOkOrCanRemoveALetter;
}

console.log(checkPhrase(phrase))
// solved at 17:52 (26 out.)

