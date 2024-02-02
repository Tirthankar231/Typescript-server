// src/server.ts
import express from 'express';
import itemRoutes from '../src/routes/itemRoute';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', itemRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
