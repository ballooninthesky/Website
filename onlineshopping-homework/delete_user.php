<?php
include 'db_connect.php';

$id = $_GET['id'];

$sql = "DELETE FROM users WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo "ลบผู้ใช้สำเร็จ";
} else {
    echo "เกิดข้อผิดพลาด: " . $conn->error;
}

$conn->close();

header("Location: admin_dashboard.php");
exit;
?>
