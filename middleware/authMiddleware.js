const jwt = require('jsonwebtoken');

const authMiddleware = {
    // Middleware xác thực người dùng
    authenticateUser: (req, res, next) => {
        // Lấy token từ header
        const token = req.header('Authorization');

        // Kiểm tra nếu token không tồn tại
        if (!token) {
            return res.status(401).json({ message: 'Authorization denied. Token not provided.' });
        }

        try {
            // Xác thực token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Lưu trữ thông tin người dùng đã xác thực trong request
            req.user = decoded.user;

            // Tiếp tục tiến trình xử lý request
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token.' });
        }
    }
};

module.exports = authMiddleware;
