import { Request, Response, NextFunction } from 'express';
import { verifyToken, getTokenFromHeader } from '../utils/authUtils';

export interface AuthRequest extends Request {
    user?: any;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = getTokenFromHeader(req);
        
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                error: 'Access denied. No token provided.' 
            });
        }

        const decoded = verifyToken(token);
        
        if (!decoded) {
            return res.status(401).json({ 
                success: false, 
                error: 'Invalid or expired token.' 
            });
        }

        // Attach user to request
        req.user = decoded;
        next();
        
    } catch (error: any) {
        console.error('Auth middleware error:', error);
        return res.status(500).json({ 
            success: false, 
            error: 'Authentication error.' 
        });
    }
};

export const roleMiddleware = (allowedRoles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        try {
            if (!req.user) {
                return res.status(401).json({ 
                    success: false, 
                    error: 'User not authenticated.' 
                });
            }

            if (!allowedRoles.includes(req.user.role)) {
                return res.status(403).json({ 
                    success: false, 
                    error: `Access denied. Required roles: ${allowedRoles.join(', ')}` 
                });
            }

            next();
        } catch (error) {
            console.error('Role middleware error:', error);
            return res.status(500).json({ 
                success: false, 
                error: 'Authorization error.' 
            });
        }
    };
};

// Optional: Teacher only middleware
export const teacherMiddleware = roleMiddleware(['teacher']);

// Optional: Student only middleware
export const studentMiddleware = roleMiddleware(['student']);