<?php include 'db_connect.php'; ?>
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>สมัครสมาชิก</title>
</head>
<body>
    <div class="header">
        <h1>สมัครสมาชิก</h1>
    </div>

    <form action="" method="POST">
        <input type="text" name="username" placeholder="ชื่อผู้ใช้" required>
        <input type="password" name="password" placeholder="รหัสผ่าน" required>
        <input type="password" name="confirm_password" placeholder="ยืนยันรหัสผ่าน" required>
        <input type="text" name="first_name" placeholder="ชื่อ" required>
        <input type="text" name="last_name" placeholder="นามสกุล" required>
        <input type="email" name="email" placeholder="อีเมล" required>
        <input type="submit" value="สมัครสมาชิก">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $confirm_password = $_POST['confirm_password'];
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $email = $_POST['email'];

        // ตรวจสอบข้อกำหนดของรหัสผ่าน
        if (!preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/", $password)) {
            echo "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร และต้องมีตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก และตัวเลขอย่างน้อยหนึ่งตัว";
            exit;
        }

        // ตรวจสอบว่ารหัสผ่านและการยืนยันรหัสผ่านตรงกันหรือไม่
        if ($password !== $confirm_password) {
            echo "รหัสผ่านไม่ตรงกัน";
            exit;
        }

        // ตรวจสอบว่า username และ email มีอยู่ในฐานข้อมูลหรือไม่
        $sql = "SELECT * FROM users WHERE username = '$username' OR email = '$email'";
        $result = $conn->query($sql);

        if ($result->num_rows == 0) {
            // แฮชรหัสผ่านก่อนบันทึกลงฐานข้อมูล
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            $insert_sql = "INSERT INTO users (username, password, first_name, last_name, email) VALUES ('$username', '$hashed_password', '$first_name', '$last_name', '$email')";
            if ($conn->query($insert_sql) === TRUE) {
                echo "สมัครสมาชิกสำเร็จ! กลับไปที่ <a href='login.php'>หน้าเข้าสู่ระบบ</a>";
            } else {
                echo "เกิดข้อผิดพลาด: " . $conn->error;
            }
        } else {
            echo "ชื่อผู้ใช้หรืออีเมลนี้มีอยู่ในระบบแล้ว";
        }
    }
    ?>

    <div class="footer">
        <p>© 2024 ร้านขายสมาร์ทโฟน</p>
    </div>
</body>
</html>
