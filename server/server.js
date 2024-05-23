require('events').EventEmitter.defaultMaxListeners = 15; 
const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');
const session = require('express-session');
const { PrismaClient } = require('@prisma/client');
const authRoutes = require('./src/routes/authRoutes');
const bookRoutes = require('./src/routes/bookRoutes');
const userRoutes = require('./src/routes/userRoutes');
const jwtAuthMiddleware = require('./src/middlewares/jwtAuthMiddleware');
const verificationRoutes = require('./src/routes/verificationRoutes');
const subscriptionRoutes = require('./src/routes/subscriptionRoutes');
const readingHistoryRoutes = require('./src/routes/readingHistoryRoutes');
const parentalControlRoutes = require('./src/routes/parentalControlRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { body, validationResult } = require('express-validator');

// Load environment variables from .env file
require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Import Prisma and instantiate it
const prisma = new PrismaClient();

// Import the redis module and create a Redis client instance
const redis = require('redis');
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

// Use dynamic import for connect-redis
import('connect-redis').then(({ default: RedisStore }) => {
  // Middleware for CORS
  const allowedOrigins = ['http://localhost:5174', 'https://mfumubuku-kids-frontend.onrender.com'];
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }));

  // Use session middleware with RedisStore
  app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.Session_Secret_Key,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production', // secure cookie in production
      maxAge: 1000 * 60 * 60 * 24
    }
  }));

  // Route to set a value in the session
  app.get('/setSessionValue', (req, res) => {
    req.session.user = { username: 'utilisateur1' };
    res.send('Value set in session');
  });

  // Route to retrieve a value from the session
  app.get('/getSessionValue', (req, res) => {
    const user = req.session.user;
    res.send(user ? `User connected: ${user.username}` : 'No user connected');
  });

  // JSON data parsing middleware
  app.use(express.json());

  app.use('/verification', verificationRoutes);

  // Initializing Passport
  app.use(passport.initialize());

  // Configuring local strategy for Passport
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

  // Mounting authentication routes
  app.use('/auth', authRoutes);

  // Routes for books with JWT authentication middleware
  app.use('/Book', jwtAuthMiddleware, bookRoutes);

  // Routes for users with JWT authentication middleware
  app.use('/user', jwtAuthMiddleware, userRoutes);

  // Error handler
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
      error: 'Internal Server Error',
      message: err.message
    });
  });

  app.use('/subscriptions', subscriptionRoutes);
  app.use('/reading-histories', readingHistoryRoutes);
  app.use('/parental-controls', parentalControlRoutes);

  // Payment route
  app.use('/api', paymentRoutes);

  // Logging middleware
  app.use(morgan('dev'));

  // Starting the server
  const PORT = process.env.PORT || 3005;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
