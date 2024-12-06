<?php include 'db_connect.php'; ?>
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>รายละเอียดสินค้า</title>
    <style>
        .product-image {
            object-fit: cover; /* Ensures the image covers the dimensions without distortion */
        }
        .product-image-large {
            width: 300px;    /* Set the width for product detail */
            height: 400px;   /* Set the height for product detail */
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>รายละเอียดสินค้า</h1>
    </div>

    <div class="product-detail-container">
        <?php
        // ตรวจสอบว่ามีการส่ง ID ของสินค้ามาหรือไม่
        if (isset($_GET['id'])) {
            $product_id = $_GET['id'];
            $sql = "SELECT * FROM products WHERE id = " . intval($product_id);
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                echo "<div class='product-detail'>";
                // Check if the image path exists, otherwise use a default image
                $image_path = !empty($row['image_path']) ? "images/" . $row['image_path'] : "images/default.jpg"; // Adjust path if needed
                echo "<img src='" . $image_path . "' alt='" . $row['name'] . "' class='product-image product-image-large'>";
                echo "<h2>" . $row['name'] . "</h2>";
                echo "<p class='price'>ราคา: " . $row['price'] . " บาท</p>";
                echo "<p class='description'>รายละเอียด: " . $row['description'] . "</p>"; // ข้อมูลรายละเอียดสินค้าจะต้องมีในฐานข้อมูล
                echo "<p class='stock'>จำนวนสินค้า: " . $row['stock'] . "</p>";
                echo "</div>";
            } else {
                echo "<p class='error'>ไม่พบสินค้าที่ต้องการดูรายละเอียด</p>";
            }
        } else {
            echo "<p class='error'>ไม่พบข้อมูลสินค้าที่ต้องการ</p>";
        }
        ?>
    </div>

    <div class="footer">
        <p>© 2024 ร้านขายสมาร์ทโฟน</p>
    </div>
</body>
</html>
