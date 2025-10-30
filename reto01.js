function translatePossessed (message) {
  if (message.trim().length === 0)
    return ''; 
  
  const reversedWords = message.split(" ").map( 
    x => x.split('').reverse().join('')
  )

  return reversedWords.join(' ');
}