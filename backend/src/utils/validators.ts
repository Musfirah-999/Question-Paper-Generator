export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];
    
    if (password.length < 6) {
        errors.push('Password must be at least 6 characters long');
    }
    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[0-9]/.test(password)) {
        errors.push('Password must contain at least one number');
    }
    
    return {
        valid: errors.length === 0,
        errors
    };
};

export const validateSignupData = (data: any): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];
    
    if (!data.email || !validateEmail(data.email)) {
        errors.push('Valid email is required');
    }
    
    if (!data.password) {
        errors.push('Password is required');
    } else {
        const passwordValidation = validatePassword(data.password);
        if (!passwordValidation.valid) {
            errors.push(...passwordValidation.errors);
        }
    }
    
    if (!data.role || !['teacher', 'student'].includes(data.role)) {
        errors.push('Role must be either teacher or student');
    }
    
    return {
        valid: errors.length === 0,
        errors
    };
};