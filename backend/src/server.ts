// backend/src/server.ts
import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

// Import routes (baad mein banayenge)
// import examRoutes from './routes/examRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());  // Important: Angular connect karne ke liye
app.use(express.json());  // JSON data handle karne ke liye

// Basic route to test
app.get('/', (req: Request, res: Response) => {
    res.json({ 
        message: 'Exam Generator Backend is running!',
        status: 'OK'
    });
});

// Health check route
app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'Server is healthy' });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: Function) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`✅ Health check: http://localhost:${PORT}/health`);
});