import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

const CONNECTION_URL = process.env.MONGO_URL;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`Server running on port  ${PORT}`)))
        .catch((e) => console.log("Error connecting to database", e.message));

app.use('/api/v1/posts', postRoutes);
app.use('/api/users', userRoutes);