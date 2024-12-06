<?php include 'db_connect.php'; ?>
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>จัดการสินค้า</title>
</head>
<body>
    <div class="header">
        <h1>จัดการสินค้า</h1>
    </div>

    <div class="container">
        <form action="" method="POST" enctype="multipart/form-data" class="product-form">
            <input type="text" name="name" placeholder="ชื่อสินค้า" required>
            <input type="text" name="description" placeholder="รายละเอียดสินค้า" required>
            <input type="number" name="price" placeholder="ราคา" required>
            <input type="number" name="stock" placeholder="จำนวนในสต็อก" required>
            <input type="file" name="image" accept="image/*">
            <input type="submit" value="เพิ่มสินค้า" class="submit-button">
        </form>

        <?php
        // Handle adding new products
        if ($_SERVER["REQUEST_METHOD"] == "POST" && !isset($_POST['edit_id'])) {
            $name = $_POST['name'];
            $description = $_POST['description'];
            $price = $_POST['price'];
            $stock = $_POST['stock'];
            $image_path = 'default.jpg'; // Set a default image if none uploaded

            // Check if a new image is uploaded
            if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
                $image_path = uniqid() . '_' . $_FILES['image']['name']; // Create unique filename
                move_uploaded_file($_FILES['image']['tmp_name'], "images/" . $image_path);
            }

            $sql = "INSERT INTO products (name, description, price, stock, image_path) VALUES ('$name', '$description', '$price', '$stock', '$image_path')";

            if ($conn->query($sql) === TRUE) {
                echo "<p class='success'>เพิ่มสินค้าสำเร็จ</p>";
            } else {
                echo "<p class='error'>เกิดข้อผิดพลาด: " . $conn->error . "</p>";
            }
        }

        // Handle product edit
        if (isset($_POST['edit_id'])) {
            $edit_id = $_POST['edit_id'];
            $name = $_POST['name'];
            $description = $_POST['description'];
            $price = $_POST['price'];
            $stock = $_POST['stock'];

            // Update the product without changing the image
            $update_sql = "UPDATE products SET name='$name', description='$description', price='$price', stock='$stock' WHERE id='$edit_id'";

            if ($conn->query($update_sql) === TRUE) {
                echo "<p class='success'>แก้ไขสินค้าสำเร็จ</p>";
            } else {
                echo "<p class='error'>เกิดข้อผิดพลาด: " . $conn->error . "</p>";
            }
        }

        // Display products for editing
        $sql = "SELECT * FROM products";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "<h2>รายการสินค้า</h2>";
            while ($row = $result->fetch_assoc()) {
                echo "<div class='product-item'>";
                echo "<img src='images/{$row['image_path']}' alt='{$row['name']}' class='product-image'>";
                echo "<h3>{$row['name']}</h3>";
                echo "<p>ราคา: {$row['price']} บาท</p>";
                echo "<p>จำนวนในสต็อก: {$row['stock']}</p>";
                echo "<form action='' method='POST' class='edit-form'>";
                echo "<input type='hidden' name='edit_id' value='{$row['id']}'>";
                echo "<input type='text' name='name' placeholder='ชื่อสินค้า' value='{$row['name']}' required>";
                echo "<input type='text' name='description' placeholder='รายละเอียดสินค้า' value='{$row['description']}' required>";
                echo "<input type='number' name='price' placeholder='ราคา' value='{$row['price']}' required>";
                echo "<input type='number' name='stock' placeholder='จำนวนในสต็อก' value='{$row['stock']}' required>";
                // Removed the image upload input
                echo "<input type='submit' value='แก้ไขสินค้า' class='edit-button'>";
                echo "</form>";
                echo "<a href='delete_product.php?id={$row['id']}' class='delete-link'>ลบสินค้า</a>";
                echo "</div>";
            }
        } else {
            echo "<p class='no-products'>ไม่มีสินค้าพร้อมจำหน่าย</p>";
        }
        ?>
    </div>

    <div class="footer">
        <p>© 2024 ร้านขายสมาร์ทโฟน</p>
    </div>
</body>
</html>
