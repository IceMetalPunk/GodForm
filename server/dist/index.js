import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(import.meta.url);
const clientPath = path.join(__dirname, '../../../client/dist');
import express from 'express';
const app = express();
const PORT = process.env.PORT || '80';
app.use(express.static(clientPath));
app.get('/', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
});
app.get('/test', (req, res) => {
    res.json({ value: 4 });
});
// console.log(process.env)
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
