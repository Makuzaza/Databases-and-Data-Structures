import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();

// app.listen(PORT, ()=> {
//     console.log(`App is listening to: ${PORT}`)
// });

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to backend");
});

app.use('/books', bookRoutes);

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('App connected to the MongoDB database');
    app.listen(PORT, ()=> {
        console.log(`App is listening to: ${PORT}`)
    });
})
.catch((error) => {
    console.log(error)
});