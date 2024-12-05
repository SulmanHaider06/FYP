require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();
const cors = require('cors');
app.use(cors());  // Allow cross-origin requests

app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
