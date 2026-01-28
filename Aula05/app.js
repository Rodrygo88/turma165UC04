import express from "express";
import "dotenv/config";
import cursoRoutes from "../Aula05/routes/curso/cursoRoutes.js"
import alunoRoutes from "../Aula05/routes/aluno/alunoRoutes.js"

const app = express();
const PORT = process.env.PORT;
const TEXTO = process.env.TEXTO;

app.use(express.json());
app.use("/curso", cursoRoutes);
app.use("/aluno", alunoRoutes);

app.get("/", (req,res) => {
    res.status(200).json({msg: TEXTO});
});

app.listen(PORT, () => {
    console.log(`Aplicação rodando em http://localhost:${PORT}`);
})
