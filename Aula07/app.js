import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Api Rodando..." });
});

app.listen(PORT, () => {
  console.log(`Aplicação rodando em http://localhost:${PORT}`);
});
