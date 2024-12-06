<?php include 'db_connect.php'; ?>
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>แผงควบคุมผู้ดูแลระบบ</title>
</head>
<body>
    <div class="header">
        <h1>แผงควบคุมผู้ดูแลระบบ</h1>
    </div>

    <div class="container">
        <h2>ผู้ใช้งานทั้งหมด</h2>
        <table>
            <thead>
                <tr>
                    <th>ชื่อผู้ใช้</th>
                    <th>ชื่อ</th>
                    <th>นามสกุล</th>
                    <th>อีเมล</th>
                    <th>การจัดการ</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $sql = "SELECT * FROM users";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>{$row['username']}</td>";
                        echo "<td>{$row['first_name']}</td>";
                        echo "<td>{$row['last_name']}</td>";
                        echo "<td>{$row['email']}</td>";
                        echo "<td><a href='delete_user.php?id={$row['id']}' class='delete-link'>ลบ</a></td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='5'>ไม่มีผู้ใช้งาน</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </div>

    <div class="footer">
        <p>© 2024 ร้านขายสมาร์ทโฟน</p>
    </div>
</body>
</html>
