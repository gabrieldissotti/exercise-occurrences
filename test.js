const phrase = 'aaabbbbbccc'

function checkPhrase(phrase) {

  const occurrences = [...phrase].reduce((accumulator, letter, index) => {
    return ({
      ...accumulator,
      [letter]: accumulator[letter] ? (accumulator[letter] + 1) : 1
    })
  }, {})

  const amount = Object.values(occurrences);

  const data = amount.map((item) => amount.map(subitem =>
    Boolean(subitem >= (item - 1) && subitem <= (item + 1))
  ).includes(false));

  return data.includes(false);
}

console.log(checkPhrase(phrase))
// solved at 17:52 (26 out.)

