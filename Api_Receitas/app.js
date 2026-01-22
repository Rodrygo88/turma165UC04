import express from "express";
import receitaRoutes from "./src/routes/receita/receitaRoutes.js"

const app = express()
app.use(express.json())
const PORT = 3000;

app.use("/receitas", receitaRoutes);

app.get("/", (req,res)=>{
    res.status(200).send("API - RECEITAS");
});

app.listen(PORT, ()=>{
    console.log(`Aplicação rodando em http://localhost:${PORT}`)
});