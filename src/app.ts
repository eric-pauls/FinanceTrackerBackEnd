import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()

//middleware
app.use(cors());
app.use(express.json());

//mongodb connection
mongoose.connect('mongodb://localhost:27017/financialTrackerDB')

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongodb connection error: '));
db.once('open', () => {
  console.log('Successfully connected to mongodb database');
})

//routes
app.get('api/categories', (req, res) => {
})
