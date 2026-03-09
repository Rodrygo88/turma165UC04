import express, { json } from "express";
import "dotenv/config";
import alunoRoutes from "./src/routes/alunoRoutes.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/alunos", alunoRoutes);

app.get("/", (req, res) => {
    res.status(200).json({msg: "API ALUNOS COM BANCO DE DADOS!"});
});

app.listen(PORT, ()=>{
     console.log(`Aplicação rodando em http://localhost:${PORT}`);
});
