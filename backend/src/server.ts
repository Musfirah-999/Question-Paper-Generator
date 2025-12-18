import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection } from './config/database';
import authRoutes from './routes/authRoutes';
import { authMiddleware } from './middleware/auth';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:4200',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test database connection on startup
testConnection().then(isConnected => {
    if (!isConnected) {
        console.log('⚠️  Warning: Database connection failed. Some features may not work.');
    }
});

// Routes
app.use('/api/auth', authRoutes);

// Protected test route (requires authentication)
app.get('/api/protected', authMiddleware, (req: any, res) => {
    res.json({
        success: true,
        message: 'Access granted to protected route.',
        user: req.user
    });
});

// Public test route
app.get('/*', (req, res) => {
    res.json({
        success: true,
        message: '🚀 Exam Generator Backend is running!',
        version: '1.0.0',
        endpoints: {
            auth: {
                signup: 'POST /api/auth/signup',
                login: 'POST /api/auth/login',
                me: 'GET /api/auth/me (protected)'
            },
            protected: 'GET /api/protected (requires auth)'
        }
    });
});

// Health check
app.get('/health', async (req, res) => {
    const dbConnected = await testConnection();
    
    res.json({
        status: 'Healthy',
        timestamp: new Date().toISOString(),
        database: dbConnected ? 'Connected' : 'Disconnected',
        server: `Running on port ${PORT}`
    });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Server error:', err);
    res.status(500).json({
        success: false,
        error: 'Internal server error.'
    });
});

// 404 handler
app.use('/*', (req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found.'
    });
});

// Start server
app.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log('🚀 EXAM GENERATOR BACKEND - DAY 2');
    console.log('='.repeat(50));
     console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`🔗 Frontend URL: ${process.env.FRONTEND_URL}`)
    console.log(`📡 Server URL: http://localhost:${PORT}`);
    console.log(`🔐 Auth API: http://localhost:${PORT}/api/auth`);
    console.log(`🔍 Health Check: http://localhost:${PORT}/health`);
    console.log(`🕒 Started at: ${new Date().toLocaleTimeString()}`);
    console.log('='.repeat(50));
});