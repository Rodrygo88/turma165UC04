import express from "express";
import "dotenv/config";
import usuarioRouter from "../Aula06/src/routes/usuarioRoutes.js"

const app = express()

const PORT = process.env.PORT;

app.use(express.json());
app.use("/usuario", usuarioRouter);

app.get("/", (req, res) => {
    res.status(200).json({msg: "Rota home da API"});
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
