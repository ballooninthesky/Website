<?php
$servername = "localhost"; // ชื่อเซิร์ฟเวอร์
$username = "root"; // ชื่อผู้ใช้
$password = ""; // รหัสผ่าน
$dbname = "smartphone_shop"; // ชื่อฐานข้อมูล

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("การเชื่อมต่อล้มเหลว: " . $conn->connect_error);
}

// ตรวจสอบว่าผู้จัดการที่มี username "manage" มีอยู่ในฐานข้อมูลหรือไม่
$check_manager = "SELECT * FROM users WHERE username = 'manage'";
$result_manager = $conn->query($check_manager);

if ($result_manager->num_rows == 0) {
    // ถ้ายังไม่มี ให้สร้างผู้จัดการใหม่
    $default_username = 'manage';
    $default_password = password_hash('1234', PASSWORD_DEFAULT); // แฮชรหัสผ่าน
    $default_first_name = 'Manager';
    $default_last_name = 'User';
    $default_email = 'manager@example.com';

    $insert_manager = "INSERT INTO users (username, password, first_name, last_name, email) VALUES ('$default_username', '$default_password', '$default_first_name', '$default_last_name', '$default_email')";
    $conn->query($insert_manager);
}

?>
