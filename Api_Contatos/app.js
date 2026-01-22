import express from "express";
import contatoRoutes from "./src/routes/contato/contatoRoutes.js"

const app = express()
app.use(express.json())
const PORT = 3000;

app.use("/contatos", contatoRoutes);

app.get("/", (req,res)=>{
    res.status(200).send("API - CONTATOS");
});

app.listen(PORT, ()=>{
    console.log(`Aplicação rodando em http://localhost:${PORT}`)
});