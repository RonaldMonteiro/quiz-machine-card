
export default (req, res) => {
	const word = req.query.word
  
  {/* ---------- AQUI VOCE EDITA AS MAQUININHAS QUE SAO PONTUADAS NA 4ª PERGUNTA ---------- */}
  {/* ------ Se precisar de +2 pontos, basta incluir o nome duas vezes ----- */}


  const question_one = [
    "Minizinha NFC",
    "Minizinha Chip 3",
    "Moderninha Plus 2",
    "Moderninha X",
    "Point Mini Chip",
    "T1 Brother",
    "T1 Chip Brother",
    "Sumup On",
  ];
  const question_two = [
    "T3 Brother",
    "Point Pro 2",
    "Moderninha Pro 2",
    "Point Smart",
    "Moderninha Smart 2",
    "Sumup Total",
  ];
  
  {/* ------------------------------------------------------------------- */}

  
  if (word == "1") {
    var x = question_one
  } else if (word == "2") {
    var x = question_two
  }

  JSON.stringify(x)
  res.status(200).json(x)
}


