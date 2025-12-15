import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

console.log('🔍 Checking Database Configuration...');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('Has Password:', !!process.env.DB_PASSWORD);

// Create MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Musfrirah2005', 
    database: process.env.DB_NAME || 'exam_generator',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000 // 10 seconds timeout
});

// Promise wrapper for async/await
const db = pool.promise();

// Test connection with better error handling
export const testConnection = async () => {
    try {
        console.log('🔄 Testing MySQL connection...');
        const [rows]: any = await db.execute('SELECT 1 + 1 AS result');
        console.log('✅ MySQL Database connected successfully!');
        console.log('📊 Test query result:', rows[0].result);
        return true;
    } catch (error: any) {
        console.error('❌ MySQL connection failed!');
        console.error('Error Code:', error.code);
        console.error('Error Message:', error.message);
        console.error('SQL State:', error.sqlState);
        
        // Helpful suggestions
        if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.log('\n🔧 TROUBLESHOOTING TIPS:');
            console.log('1. Check your MySQL password in .env file');
            console.log('2. Try empty password if you never set one');
            console.log('3. Test with: mysql -u root -p');
            console.log('4. Default XAMPP password: EMPTY');
            console.log('5. Default WAMP password: EMPTY');
            console.log('6. If you installed MySQL separately, use that password');
        }
        
        return false;
    }
};

export default db;