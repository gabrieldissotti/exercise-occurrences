/**
 * Escreva uma função que receba uma string e retorne true se ela estiver no 
 * padrão apresentado abaixo e retorne false caso contrário
 * 
 * Exemplos: 
 * 
 * 'aabbcc' é uma string valida
 * 'aabcc' é uma string inválida
 * 'aabbbbcc' é uma string inválida
 * 
 * Você pode remover 1 caracter da string para torna-lá válida, mas não pode 
 * adicionar, Exemplo: 'aabbbcc' => 'aabbcc'
 * 
 */


const phrase = 'aabbcc'

function isEqualOrCanRemoveOneToMatch(amountA, amountB) {
  return Boolean(amountB >= (amountA) && amountB <= (amountA + 1));
}

function compareOccurrences(occurrences) {
  const lettersAmount = Object.values(occurrences);

  return lettersAmount.map((amountA) =>
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

