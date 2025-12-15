import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/database';
import { validateSignupData } from '../utils/validators';

const router = express.Router();

// SIGNUP - Create new user
router.post('/signup', async (req, res) => {
    try {
        const { email, password, role } = req.body;
        
        // Validate input
        const validation = validateSignupData(req.body);
        if (!validation.valid) {
            return res.status(400).json({ 
                success: false, 
                errors: validation.errors 
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
                error: 'User with this email already exists' 
            });
        }
        
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Insert new user
        const [result]: any = await db.execute(
            'INSERT INTO users (email, password, role) VALUES (?, ?, ?)',
            [email, hashedPassword, role]
        );
        
        // Generate JWT token
        const token = jwt.sign(
            { 
                id: result.insertId, 
                email, 
                role 
            },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '7d' }
        );
        
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: {
                token,
                user: {
                    id: result.insertId,
                    email,
                    role
                }
            }
        });
        
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Server error during registration' 
        });
    }
});

// LOGIN - Authenticate user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ 
                success: false, 
                error: 'Email and password are required' 
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
                error: 'Invalid email or password' 
            });
        }
        
        const user = users[0];
        
        // Verify password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ 
                success: false, 
                error: 'Invalid email or password' 
            });
        }
        
        // Generate JWT token
        const token = jwt.sign(
            { 
                id: user.id, 
                email: user.email, 
                role: user.role 
            },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '7d' }
        );
        
        res.json({
            success: true,
            message: 'Login successful',
            data: {
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    created_at: user.created_at
                }
            }
        });
        
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Server error during login' 
        });
    }
});

// GET CURRENT USER - Protected route
router.get('/me', async (req, res) => {
    try {
        // This route will be protected by auth middleware
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                error: 'No token provided' 
            });
        }
        
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        
        // Get user from database
        const [users]: any = await db.execute(
            'SELECT id, email, role, created_at FROM users WHERE id = ?',
            [decoded.id]
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

export default router;