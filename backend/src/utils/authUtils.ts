import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret_key_change_this';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

// Hash password
export const hashPassword = async (password: string): Promise<string> => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw new Error('Password hashing failed');
    }
};

// Compare password
export const comparePassword = async (
    plainPassword: string, 
    hashedPassword: string
): Promise<boolean> => {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
        console.error('Error comparing passwords:', error);
        return false;
    }
};


// Generate JWT token
export const generateToken = (
    userId: number, 
    email: string, 
    role: string
): string => {
    try {
        // JWT_EXPIRY ko explicitly string mein convert karein
        const expiresInValue = String(JWT_EXPIRY).trim();
        
        // Agar empty hai toh default set karein
        const expiresIn = expiresInValue || '7d';
        
        return jwt.sign(
            {
                id: userId,
                email,
                role,
                iat: Math.floor(Date.now() / 1000)
            },
            JWT_SECRET as jwt.Secret, // TypeScript ke liye cast karein
            {
                expiresIn: expiresIn as jwt.SignOptions['expiresIn'], // Type assertion
                algorithm: 'HS256'
            }
        );
    } catch (error) {
        console.error('Error generating token:', error);
        throw new Error('Token generation failed');
    }
};

// Verify JWT token
export const verifyToken = (token: string): any => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    } catch (error: any) {
        // Handle specific JWT errors
        if (error.name === 'TokenExpiredError') {
            console.error('Token expired:', error.expiredAt);
            return null;
        }
        if (error.name === 'JsonWebTokenError') {
            console.error('Invalid token:', error.message);
            return null;
        }
        console.error('Token verification error:', error);
        return null;
    }
};

// Decode token without verification (for debugging)
export const decodeToken = (token: string): any => {
    try {
        return jwt.decode(token);
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Validate password strength
export const validatePassword = (password: string): { valid: boolean; message: string } => {
    if (password.length < 6) {
        return { valid: false, message: 'Password must be at least 6 characters long' };
    }
    return { valid: true, message: 'Password is valid' };
};

// Generate random password (for testing)
export const generateRandomPassword = (length: number = 8): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
};

// Format user response (remove sensitive data)
export const formatUserResponse = (user: any) => {
    if (!user) return null;
    
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

// Check if user has required role
export const hasRole = (user: any, requiredRole: string): boolean => {
    return user && user.role === requiredRole;
};

// Get token from request header
export const getTokenFromHeader = (req: any): string | null => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        return authHeader.split(' ')[1];
    }
    return null;
};