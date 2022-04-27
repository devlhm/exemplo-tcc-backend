const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const PORT = process.env.PORT || 3000;

const nome = "joao";
const senha = "joao123";

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.post('/login', upload.none(), (req, res) => {
    const formData = req.body;
    if(formData.nome == nome && formData.senha == senha) {
        res.send("Acesso garantido!")
    } else {
        res.send("Acesso negado!")
    }
});

app.get('/', (req, res) => {
    res.send("Bem vindo!");
})
