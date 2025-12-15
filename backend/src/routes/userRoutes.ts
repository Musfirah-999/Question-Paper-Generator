import express from 'express';
import { authMiddleware, teacherMiddleware, studentMiddleware } from '../middleware/auth';
import db from '../config/database';

const router = express.Router();

// Get all users (Admin/Teacher only)
router.get('/', authMiddleware, teacherMiddleware, async (req, res) => {
    try {
        const [users]: any = await db.execute(
            'SELECT id, email, role, created_at FROM users ORDER BY created_at DESC'
        );
        
        res.json({
            success: true,
            count: users.length,
            data: users
        });
        
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Server error' 
        });
    }
});

// Get user by ID
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const userId = req.params.id;
        
        const [users]: any = await db.execute(
            'SELECT id, email, role, created_at FROM users WHERE id = ?',
            [userId]
        );
        
        if (users.length === 0) {
            return res.status(404).json({ 
                success: false, 
                error: 'User not found' 
            });
        }
        
        res.json({
            success: true,
            data: users[0]
        });
        
    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Server error' 
        });
    }
});

// Get user stats (for dashboard)
router.get('/stats/dashboard', authMiddleware, async (req: any, res) => {
    try {
        const userId = req.user.id;
        const userRole = req.user.role;
        
        let stats: any = {
            totalQuizzes: 0,
            totalAttempts: 0,
            averageScore: 0
        };
        
        if (userRole === 'teacher') {
            // Teacher stats
            const [quizCount]: any = await db.execute(
                'SELECT COUNT(*) as count FROM quizzes WHERE teacher_id = ?',
                [userId]
            );
            
            stats.totalQuizzes = quizCount[0].count;
            
        } else if (userRole === 'student') {
            // Student stats
            const [attemptCount]: any = await db.execute(
                'SELECT COUNT(*) as count FROM attempts WHERE student_id = ?',
                [userId]
            );
            
            const [scoreStats]: any = await db.execute(
                'SELECT AVG(percentage) as avg_score FROM attempts WHERE student_id = ?',
                [userId]
            );
            
            stats.totalAttempts = attemptCount[0].count;
            stats.averageScore = scoreStats[0].avg_score || 0;
        }
        
        res.json({
            success: true,
            data: {
                user: {
                    id: userId,
                    role: userRole
                },
                stats
            }
        });
        
    } catch (error) {
        console.error('Stats error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Server error' 
        });
    }
});

export default router;