const express = require("express");
// const notes = require("./data/notes");
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes')
const { notFound, errorHandler } = require("./middlewares/errorMiddleWare");


const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use(cors());

// app.get('/', (req, res) => {
//     res.send("API is running...");
// });

// app.get('/api/notes', (req, res) => {
//     res.send(notes);
// })

app.use('/api/users', userRoutes);
app.use('/api/exercises', exerciseRoutes);



app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));