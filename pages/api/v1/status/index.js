function status(resquest, response) {
  response.status(200).json({ chave: "Alunos do Curso.dev " });
}

export default status;
