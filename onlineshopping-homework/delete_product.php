<?php
include 'db_connect.php';

$id = $_GET['id'];

$sql = "DELETE FROM products WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo "ลบสินค้าสำเร็จ";
} else {
    echo "เกิดข้อผิดพลาด: " . $conn->error;
}

$conn->close();

header("Location: manage_products.php");
exit;
?>
