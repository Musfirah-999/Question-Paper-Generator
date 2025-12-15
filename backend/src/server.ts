import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection } from './config/database';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection on startup
testConnection().then(isConnected => {
    if (!isConnected) {
        console.log('⚠️  Running without database connection');
    }
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ 
        message: '🎉 Exam Generator Backend v2.0',
        status: 'OK',
        features: [
            '✅ Authentication System',
            '✅ JWT Token Based',
            '✅ MySQL Database',
            '✅ Role-based Access'
        ],
        endpoints: {
            auth: {
                signup: 'POST /api/auth/signup',
                login: 'POST /api/auth/login',
                me: 'GET /api/auth/me'
            },
            users: {
                all: 'GET /api/users',
                byId: 'GET /api/users/:id',
                stats: 'GET /api/users/stats/dashboard'
            }
        }
    });
});

// Health check with DB status
app.get('/health', async (req, res) => {
    const dbStatus = await testConnection();
    
    res.json({ 
        status: 'Healthy',
        server: `Running on port ${PORT}`,
        database: dbStatus ? 'Connected ✅' : 'Disconnected ⚠️',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Handle 404
app.use('*', (req, res) => {
    res.status(404).json({ 
        success: false,
        error: 'Route not found',
        available_routes: ['/api/auth/signup', '/api/auth/login', '/api/users']
    });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Server error:', err);
    res.status(500).json({ 
        success: false,
        error: 'Internal server error' 
    });
});

// Start server
app.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log('🚀 EXAM GENERATOR BACKEND - DAY 2: AUTHENTICATION');
    console.log('='.repeat(60));
    console.log(`📡 Server URL: http://localhost:${PORT}`);
    console.log(`🔐 Authentication: http://localhost:${PORT}/api/auth`);
    console.log(`👥 User Management: http://localhost:${PORT}/api/users`);
    console.log(`🩺 Health Check: http://localhost:${PORT}/health`);
    console.log(`🕒 Started at: ${new Date().toLocaleTimeString()}`);
    console.log('='.repeat(60));
    console.log('\n📋 Available Endpoints:');
    console.log('POST /api/auth/signup - Register new user');
    console.log('POST /api/auth/login  - Login user');
    console.log('GET  /api/auth/me     - Get current user (with token)');
    console.log('GET  /api/users       - Get all users (Teacher only)');
    console.log('='.repeat(60));
});