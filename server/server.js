import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
    }
)