
export default (req, res) => {
	const word = req.query.word
  
  {/* ---------- AQUI VOCE EDITA AS MAQUININHAS QUE SAO PONTUADAS NA 1ª PERGUNTA ---------- */}
  {/* ------ Se precisar de +2 pontos, basta incluir o nome duas vezes ----- */}


  const question_one = [
    'Minizinha Chip 3', 
    'Point Mini Chip', 
    'Minizinha NFC', 
    'T1 Chip Brother',
    'T1 Brother',
  ];
  const question_two = [
    'T1 Chip Brother', 
    'Moderninha Plus 2', 
    'T2 Brother', 
    'Moderninha X',
    'SumUp On',
  ];
  const question_three = [
    'T3 Brother', 
    'Point Pro 2', 
    'Moderninha Pro 2',
    'Point Smart',
    'Moderninha Smart 2',
    'Sumup Total',
  
  ];
  const question_four = [];
  
  {/* ------------------------------------------------------------------- */}

  
  if (word == "1") {
    var x = question_one
  } else if (word == "2") {
    var x = question_two
  } else if (word == "3") {
    var x = question_three
  } else if (word == "4") {
    var x = question_four
  }

  JSON.stringify(x)
  res.status(200).json(x)
}


