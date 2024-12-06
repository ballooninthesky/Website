<?php include 'db_connect.php'; ?>
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>เข้าสู่ระบบ</title>
</head>
<body>
    <div class="header">
        <h1>เข้าสู่ระบบ</h1>
    </div>

    <div class="login-container">
        <form action="" method="POST">
            <input type="text" name="username" placeholder="ชื่อผู้ใช้" required>
            <input type="password" name="password" placeholder="รหัสผ่าน" required>
            <input type="submit" value="เข้าสู่ระบบ">
        </form>

        <div class="register-link">
            <p>ยังไม่สมัครสมาชิก? <a href="register.php">คลิกที่นี่เพื่อสมัครสมาชิก</a></p>
        </div>

        <?php
        session_start();
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $username = $_POST['username'];
            $password = $_POST['password'];

            $sql = "SELECT * FROM users WHERE username = '$username'";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                if (password_verify($password, $row['password'])) {
                    $_SESSION['username'] = $row['username'];

                    // หากชื่อผู้ใช้เป็น manage ให้แสดงตัวเลือก
                    if ($row['username'] == 'manage') {
                        echo "<p class='success'>เข้าสู่ระบบสำเร็จ!</p>";
                        echo "<p>คุณต้องการไปที่:</p>";
                        echo "<a href='manage_products.php' class='button'>หน้าจัดการสินค้า</a> | ";
                        echo "<a href='admin_dashboard.php' class='button'>หน้าผู้ดูแลระบบ</a>";
                    } else {
                        // หากไม่ใช่ผู้จัดการ ให้ redirect ไปยังหน้าหลัก
                        header("Location: products.php");
                        exit;
                    }
                } else {
                    echo "<p class='error'>รหัสผ่านไม่ถูกต้อง</p>";
                }
            } else {
                echo "<p class='error'>ไม่พบชื่อผู้ใช้</p>";
            }
        }
        ?>
    </div>

    <div class="footer">
        <p>© 2024 ร้านขายสมาร์ทโฟน</p>
    </div>
</body>
</html>
