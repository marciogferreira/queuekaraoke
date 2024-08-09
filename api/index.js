import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import fs from 'node:fs'
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());

const lista = [];

app.get('/', (req, res) => {
    
    return res.sendFile('index.html');
})

app.get('/musicas', (req, res) => {
    return res.status(200).json(lista)
})

app.post('/musicas', (req, res) => {
    const body = req.body;
    lista.push(body);
    return res.status(200).json({ message: 'Música Salva com Sucesso.'})
})

app.put('/musicas/:indice', (req, res) => {
    const indice = req.params.indice;
    const body = req.body;
    const indiceLista = lista.findIndex(indiceLista => indice === indiceLista)
    lista[indiceLista] = body;
    return res.status(200).json({ message: 'Música Atualizada com Sucesso.'})
})

app.delete('/musicas/:indice', (req, res) => {
    const indice = req.params.indice;
    lista.splice(indice, 1);
    return res.status(200).json({ message: 'Música Removida com Sucesso.'})
})

app.listen(3000, 'localhost', () => {
    console.log('Server is running on port http://localhost:3000');
});

export default app;