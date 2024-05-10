const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Đăng ký người dùng
router.post('/register', userController.register);

// Đăng nhập người dùng
router.post('/login', userController.login);

// Xem hồ sơ người dùng (yêu cầu xác thực)
router.get('/profile', authMiddleware.authenticateUser, userController.profile);

// Cập nhật hồ sơ người dùng (yêu cầu xác thực)
router.put('/profile', authMiddleware.authenticateUser, userController.updateProfile);

// Xóa tài khoản người dùng (yêu cầu xác thực)
router.delete('/profile', authMiddleware.authenticateUser, userController.deleteProfile);

module.exports = router;
