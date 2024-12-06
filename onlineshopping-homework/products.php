<?php include 'db_connect.php'; ?>
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>หน้าแสดงสินค้า</title>

</head>
<body>
    <div class="header">
        <h1>รายการสินค้า</h1>
    </div>

    <div class="search-bar">
        <form action="" method="GET">
            <input type="text" name="search" placeholder="ค้นหาสินค้า..." required>
            <input type="submit" value="ค้นหา">
        </form>
    </div>

    <div class="products">
        <?php
        // ตรวจสอบว่ามีการค้นหาหรือไม่
        $search_query = '';
        if (isset($_GET['search'])) {
            $search_query = $_GET['search'];
        }

        // ค้นหาสินค้าในฐานข้อมูล
        $sql = "SELECT * FROM products WHERE name LIKE '%" . $conn->real_escape_string($search_query) . "%'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<div class='product-item'>";
                
                // ตรวจสอบเส้นทางภาพ
                $image_path = !empty($row['image_path']) ? "images/" . $row['image_path'] : "images/default.jpg";
                
                // เพิ่มการแสดงผลเพื่อ Debug
                
                echo "<img src='" . $image_path . "' alt='" . $row['name'] . "' class='product-image product-image-small'>";
                echo "<h2 class='product-name'>" . $row['name'] . "</h2>";
                echo "<p class='product-price'>ราคา: " . $row['price'] . " บาท</p>";
                echo "<p class='product-stock'>จำนวนสินค้า: " . $row['stock'] . "</p>";
                echo "<a href='product_detail.php?id=" . $row['id'] . "' class='product-link'>ดูรายละเอียด</a>"; // ลิงก์ไปยังหน้ารายละเอียดสินค้า
                echo "</div>";
            }
        } else {
            echo "<p>ไม่มีสินค้าในขณะนี้</p>";
        }
        ?>
    </div>

    <div class="footer">
        <p>© 2024 ร้านขายสมาร์ทโฟน</p>
    </div>
</body>
</html>
