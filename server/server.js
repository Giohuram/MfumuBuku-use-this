const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
// const { prisma } = require('./prisma/'); // Import your Prisma instance
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const morgan = require('morgan'); // Importing morgan for logging

const app = express();

// Middleware for CORS
app.use(cors());

// Middleware for parsing JSON data
app.use(express.json());

// Initialize Passport
app.use(passport.initialize());

// Configure local strategy for Passport
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: { username: username }
      });
      if (!user) {
        return done(null, false, { message: 'Username not found' });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

// Mount authentication routes
app.use('/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Logging middleware
app.use(morgan('dev'));

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
