import jwt from "jsonwebtoken";

// Função MIDDLEWARE para proteger rotas

export function autenticarToken(req, res, next) {
  // Pegar o Header Authorization (formato esperado: "Bearer <token>")
  const autHeader = req.headers["authorization"];
  // Extrair o tokem do header (remover "Bearer")
  const tokenHeader = autHeader && autHeader.split(" ")[1];
  //Se não houver token, retorna erri 401 (não autorizado)

  //Tenta pegar do cookie: token = <token>
  const tokenCookie = req.cookies?.token;

  // Usa o que exister
  const token = tokenHeader || tokenCookie;

  if (!token) {
    res.status(401).json({ msg: "Acesso negado - Token não fornecido" });
    return;
  };

  try {
    // Verificar se o token é válido
    const usuario = jwt.verify(token, process.env.JWT_SECRET);
    // Adiciona os dados do usuário à requisição
    req.usuario = usuario;
    // Continua para a próxima função da rota
    next();
  } catch (error) {
    // Se o token for inválido ou está expirado, retorna erro 403(proibido)
    res
      .status(403)
      .json({ msg: "Erro interno na autorização", erro: error.message });
  }
}
