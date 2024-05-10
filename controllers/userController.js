const User = require('../models/User');
const jwt = require('jsonwebtoken');

const userController = {
    register: async (req, res) => {
        // Logic đăng ký người dùng
    },
    login: async (req, res) => {
        // Logic đăng nhập người dùng
    },
    profile: async (req, res) => {
        try {
            // Kiểm tra xem người dùng đã đăng nhập chưa
            if (!req.user) {
                return res.status(401).json({ message: 'Authorization denied. Please login first.' });
            }

            // Lấy thông tin của người dùng từ req.user
            const user = req.user;

            // Trả về thông tin hồ sơ của người dùng
            res.status(200).json({ user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error.' });
        }
    },
    updateProfile: async (req, res) => {
        // Logic cập nhật hồ sơ người dùng
    },
    deleteProfile: async (req, res) => {
        // Logic xóa hồ sơ người dùng
    }
};

module.exports = userController;
