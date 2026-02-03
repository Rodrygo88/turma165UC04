import express from "express";
import usuarioRoutes from "./src/routes/usuariosRoutes.js"
import "dotenv/config";

const app = express();

const PORT = process.env.PORT;
app.use(express.json());

app.use("/usuarios", usuarioRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Api Rodandoo..." });
});

app.listen(PORT, () => {
  console.log(`Aplicação rodando em http://localhost:${PORT}`);
});
