import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mailRoute from './route/mail.Route.js'

dotenv.config();

const PORT = process.env.PORT

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST,',
  credentials: true,
}));
app.use(express.json())


app.use('/api', mailRoute)


app.listen(PORT, () => {
  console.log('Welcome to my server');
})

app.use('/', (req, res) => {
  return res.status(201).json({
    success: true,
    message: 'Welcome to my server'
  })
})