// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import itemRouter from '../src/routes/itemRoute';

const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '50mb' }));

// Use your routes
app.use('/api', itemRouter);

app.listen(port, () => {
    console.log(`Server running at port - http://127.0.0.1:${port}`);
});
