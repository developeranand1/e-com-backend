// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const morgan = require('morgan');
// const connectDB = require('./config/db');


// dotenv.config();
// connectDB();

// const app = express();

// app.use(morgan('dev')); 
// app.use(cors());
// app.use(express.json());



// app.get("/api/test",(req, res) =>{
//   res.status(200).json({ message: '✅ API is working fine!' });
// })

// app.use('/api/categories', require('./routes/categories'));
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/products', require('./routes/products'));
// app.use('/api/orders', require('./routes/orders'));

// app.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message });
// });


// module.exports = app;


const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Test Route
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: '✅ API is working fine!' });
});

// Main Routes
app.use('/api/categories', require('./routes/categories'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

