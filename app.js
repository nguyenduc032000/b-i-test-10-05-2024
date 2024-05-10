const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Kết nối với cơ sở dữ liệu MongoDB
mongoose.connect('mongodb://localhost:27017/my_database')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình Express để sử dụng các tệp tĩnh trong thư mục 'public' để phục vụ các tệp như CSS, hình ảnh, v.v.
app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa tuyến đường để phản hồi với trang HTML khi nhận yêu cầu GET đến thư mục gốc ('/').
app.get('/', (req, res) => {
    // Phản hồi với trang HTML 'index.html' trong thư mục 'views'.
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Định nghĩa cổng mà máy chủ Express sẽ lắng nghe trên.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
