import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname: string = fileURLToPath(import.meta.url);
const clientPath: string = path.join(__dirname, '../../../client/dist');
import express, { Express, Request, Response } from 'express';
const app: Express = express();
const PORT: string = process.env.PORT || '80';
app.use(express.static(clientPath));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(clientPath, 'index.html'));
});

app.get('/test', (req: Request, res: Response) => {
    res.json({ value: 4 });
});

// console.log(process.env)
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));