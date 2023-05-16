import mongoose from 'mongoose';
import express from 'express';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
mongoose.connect(process.env.mongoConnectionUrl)
app.listen(process.env.Port, () => {
    console.log('Started Application on http://localhost:' + process.env.Port)
})