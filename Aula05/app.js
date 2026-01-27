import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;
const TEXTO = process.env.TEXTO;

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({msg: TEXTO});
});

app.listen(PORT, () => {
    console.log(`Aplicação rodando em http://localhost:${PORT}`);
})