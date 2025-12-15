import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extend Request type to include user
export interface AuthRequest extends Request {
    user?: any;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        // Get token from header
        const authHeader = req.header('Authorization');
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ 
                success: false, 
                error: 'Access denied. No token provided.' 
            });
        }

        const token = authHeader.substring(7); // Remove 'Bearer ' prefix
        
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        
        // Add user to request
        req.user = decoded;
        
        next();
    } catch (error) {
        return res.status(401).json({ 
            success: false, 
            error: 'Invalid token' 
        });
    }
};

// Role-based middleware
export const teacherMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user?.role !== 'teacher') {
        return res.status(403).json({ 
            success: false, 
            error: 'Access denied. Teacher role required.' 
        });
    }
    next();
};

export const studentMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user?.role !== 'student') {
        return res.status(403).json({ 
            success: false, 
            error: 'Access denied. Student role required.' 
        });
    }
    next();
};