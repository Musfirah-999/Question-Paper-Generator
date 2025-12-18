import express from 'express';
import db from '../config/database';
import { 
    hashPassword, 
    comparePassword, 
    generateToken, 
    isValidEmail, 
    validatePassword 
} from '../utils/authUtils';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

// User Signup
router.post('/signup', async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Validation
        if (!email || !password || !role) {
            return res.status(400).json({
                success: false,
                error: 'Please provide email, password, and role.'
            });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                error: 'Please provide a valid email address.'
            });
        }

        if (!['teacher', 'student'].includes(role)) {
            return res.status(400).json({
                success: false,
                error: 'Role must be either "teacher" or "student".'
            });
        }

        const passwordValidation = validatePassword(password);
        if (!passwordValidation.valid) {
            return res.status(400).json({
                success: false,
                error: passwordValidation.message
            });
        }

        // Check if user already exists
        const [existingUsers]: any = await db.execute(
            'SELECT id FROM users WHERE email = ?',
            [email]
        );

        if (existingUsers.length > 0) {
            return res.status(400).json({
                success: false,
                error: 'User with this email already exists.'
            });
        }

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Create user
        const [result]: any = await db.execute(
            'INSERT INTO users (email, password, role) VALUES (?, ?, ?)',
            [email, hashedPassword, role]
        );

        // Generate token
        const token = generateToken(result.insertId, email, role);

        // Prepare response
        const response = {
            success: true,
            message: 'User created successfully.',
            data: {
                user: {
                    id: result.insertId,
                    email,
                    role
                },
                token,
                token_type: 'Bearer',
                expires_in: '7 days'
            }
        };

        res.status(201).json(response);

    } catch (error: any) {
        console.error('Signup error:', error);
        
        // Handle specific errors
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({
                success: false,
                error: 'Email already exists.'
            });
        }
        
        res.status(500).json({
            success: false,
            error: 'Server error. Please try again later.',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// User Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Please provide email and password.'
            });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                error: 'Please provide a valid email address.'
            });
        }

        // Find user
        const [users]: any = await db.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        if (users.length === 0) {
            return res.status(401).json({
                success: false,
                error: 'Invalid email or password.'
            });
        }

        const user = users[0];

        // Check password
        const isValidPassword = await comparePassword(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({
                success: false,
                error: 'Invalid email or password.'
            });
        }

        // Generate token
        const token = generateToken(user.id, user.email, user.role);

        // Prepare response
        const response = {
            success: true,
            message: 'Login successful.',
            data: {
                user: {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    created_at: user.created_at
                },
                token,
                token_type: 'Bearer',
                expires_in: '7 days'
            }
        };

        res.json(response);

    } catch (error: any) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error. Please try again later.'
        });
    }
});

// Get current user (protected route)
router.get('/me', authMiddleware, async (req: any, res) => {
    try {
        const userId = req.user.id;
        
        const [users]: any = await db.execute(
            'SELECT id, email, role, created_at FROM users WHERE id = ?',
            [userId]
        );

        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                error: 'User not found.'
            });
        }

        const user = users[0];

        res.json({
            success: true,
            data: {
                user
            }
        });

    } catch (error: any) {
        console.error('Get user error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error.'
        });
    }
});

// Test protected route
router.get('/test-protected', authMiddleware, (req: any, res) => {
    res.json({
        success: true,
        message: 'Access granted to protected route.',
        user: req.user
    });
});

export default router;