
export default (req, res) => {
	const word = req.query.word
  const wordJSON = JSON.parse(word)

  const array1 = wordJSON[0];
  const array2 = wordJSON[1];
  const array3 = wordJSON[2];
  const array4 = wordJSON[3];

  const array123 = array1.concat(array2, array3);
  const array = [];

  for (var i of array123) {
    if (!array4.includes(i)) {
      array.push(i);
    }
  }
  const frequency = array.reduce((freq, word) => {
    freq[word] = (freq[word] || 0) + 1;
    return freq;
  }, {});

  const listTop = Object.keys(frequency)
    .sort((a, b) => frequency[b] - frequency[a])
    .slice(0, 3);

  const listTopString =  JSON.stringify(listTop);
  
  res.status(200).json(listTopString)
}


