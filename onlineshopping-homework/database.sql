CREATE DATABASE smartphone_shop;

USE smartphone_shop;

CREATE TABLE users (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE products (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT(11) NOT NULL,
    image_path VARCHAR(255) NOT NULL
);

SELECT image_path FROM products;

INSERT INTO products (name, description, price, stock, image_path) VALUES
('iPhone 13', 'Apple smartphone with A15 chip and 6.1 inch display', 29900.00, 50, 'images/iphone.png'),
('Samsung Galaxy S21', 'Samsung flagship with powerful camera and display', 24900.00, 30, 'images/galaxy_s21.jpg'),
('Google Pixel 6', 'Smartphone with advanced AI camera capabilities', 22900.00, 20, 'images/pixel6.jpg'),
('OnePlus 9', 'Flagship smartphone with fast performance and charging', 21900.00, 25, 'images/oneplus9.jpg'),
('Xiaomi Mi 11', 'High-performance smartphone with AMOLED display', 18900.00, 15, 'images/mi11.jpg'),
('Oppo Find X3', 'Stylish smartphone with stunning camera quality', 23900.00, 10, 'images/findx3.jpg'),
('Vivo V21', 'Smartphone with excellent low-light camera performance', 16900.00, 40, 'images/vivo_v21.png'),
('Sony Xperia 5 III', 'Compact smartphone with pro-level camera features', 25900.00, 5, 'images/xperia5iii.png'),
('Huawei P40', 'Smartphone with advanced photography capabilities', 24900.00, 12, 'images/p40.jpg'),
('Nokia 8.3', '5G smartphone with impressive build quality', 19900.00, 18, 'images/nokia83.png'),
('Realme GT', 'Affordable flagship with high-end performance', 18900.00, 22, 'images/realme_gt.png'),
('Motorola Edge 20', 'Smartphone with excellent display and features', 17900.00, 20, 'images/edge20.png'),
('Asus Zenfone 8', 'Compact smartphone with high performance', 22900.00, 15, 'images/zenfone8.jpg'),
('LG Velvet', 'Stylish smartphone with unique design and features', 18900.00, 17, 'images/velvet.jpg'),
('HTC U20 5G', '5G smartphone with a premium design', 19900.00, 10, 'images/htc_u20.jpg'),
('Xiaomi Redmi Note 10', 'Budget smartphone with great value', 8990.00, 50, 'images/redmi_note10.jpg'),
('Samsung Galaxy A32', 'Affordable smartphone with AMOLED display', 10900.00, 30, 'images/galaxy_a32.jpg'),
('Realme Narzo 30', 'Budget-friendly smartphone with decent performance', 6990.00, 45, 'images/narzo30.jpg'),
('Nokia G20', 'Affordable smartphone with good battery life', 6990.00, 25, 'images/nokia_g20.jpg'),
('Honor 50', 'Stylish smartphone with good camera performance', 17900.00, 18, 'images/honor50.jpg');
