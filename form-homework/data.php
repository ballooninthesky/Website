<?php 
// ตั้งค่าการเชื่อมต่อฐานข้อมูล
$servername = "localhost"; // หรือชื่อโฮสต์ของคุณ
$username = "root";        // ชื่อผู้ใช้ฐานข้อมูลของคุณ
$password = "";            // รหัสผ่านฐานข้อมูลของคุณ
$dbname = "dbhw8";         // ชื่อฐานข้อมูลที่สร้างขึ้น

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// ฟังก์ชันสำหรับตรวจสอบค่าว่างและป้องกันการโจมตีแบบ XSS
function check_empty($value) {
    return empty($value) ? '-' : htmlspecialchars($value);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // ดึงข้อมูลจากฟอร์มและทำการ sanitize
    $number_member = check_empty($_POST['number_member']);
    $date = check_empty($_POST['date']);
    $first_name = check_empty($_POST['first_name']);
    $surname = check_empty($_POST['surname']);
    $dob = check_empty($_POST['dob']);
    $age = check_empty($_POST['age']);
    $sex = check_empty($_POST['sex']);
    $nationality = check_empty($_POST['nationality']);
    $company = check_empty($_POST['company']);
    $business_type = check_empty($_POST['business_type']);
    $company_address = check_empty($_POST['company_address']);
    $moo = check_empty($_POST['moo']);
    $soi = check_empty($_POST['soi']);
    $road = check_empty($_POST['road']);
    $sub_district = check_empty($_POST['sub_district']);
    $district = check_empty($_POST['district']);
    $province = check_empty($_POST['province']);
    $postal_code = check_empty($_POST['postal_code']);
    $mobile_phone = check_empty($_POST['mobile_phone']);
    $fax = check_empty($_POST['fax']);
    $email = check_empty($_POST['email']);
    $line = check_empty($_POST['line']);
    $contact_address = isset($_POST['contact_address']) ? check_empty($_POST['contact_address']) : '-';
    $degree = isset($_POST['degree']) ? check_empty($_POST['degree']) : '-';
    $career = isset($_POST['career']) ? check_empty($_POST['career']) : '-';
    $membership_type = isset($_POST['membership_type']) ? check_empty($_POST['membership_type']) : '-';
    $payment_method = isset($_POST['payment_method']) ? check_empty($_POST['payment_method']) : '-';
    $data_consent = isset($_POST['data_consent']) ? check_empty($_POST['data_consent']) : '-';
    $transfer_details = check_empty($_POST['transfer_details']);
    $other_occupation = check_empty($_POST['other_occupation']);
    $bachelor_faculty = check_empty($_POST['bachelor_faculty']);
    $bachelor_major = check_empty($_POST['bachelor_major']);
    $bachelor_university = check_empty($_POST['bachelor_university']);
    $higher_faculty = check_empty($_POST['higher_faculty']);
    $higher_major = check_empty($_POST['higher_major']);
    $higher_university = check_empty($_POST['higher_university']);

    // จัดการอัพโหลดรูปภาพ
    if (isset($_FILES['photo']) && $_FILES['photo']['error'] == 0) {
        $allowed = array("jpg" => "image/jpeg", "jpeg" => "image/jpeg", "png" => "image/png");
        $filename = $_FILES['photo']['name'];
        $filetype = $_FILES['photo']['type'];
        $filesize = $_FILES['photo']['size'];

        // ตรวจสอบประเภทไฟล์
        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        if (!array_key_exists(strtolower($ext), $allowed)) {
            die("Error: กรุณาอัพโหลดไฟล์ประเภท JPG, JPEG, PNG.");
        }

        // ตรวจสอบขนาดไฟล์ (จำกัดที่ 2MB)
        $maxsize = 2 * 1024 * 1024;
        if ($filesize > $maxsize) {
            die("Error: ไฟล์ของคุณเกินขนาดที่กำหนด (2MB).");
        }

        // ตรวจสอบ MIME type
        if (in_array($filetype, $allowed)) {
            // สร้างชื่อไฟล์ใหม่เพื่อหลีกเลี่ยงการซ้ำ
            $new_filename = uniqid() . "." . $ext;
            $upload_dir = "uploads/";
            if (!is_dir($upload_dir)) {
                mkdir($upload_dir, 0755, true);
            }
            $filepath = $upload_dir . $new_filename;

            // ย้ายไฟล์ไปยังโฟลเดอร์ปลายทาง
            if (move_uploaded_file($_FILES['photo']['tmp_name'], $filepath)) {
                $photo_path = $filepath;
            } else {
                die("Error: ไม่สามารถอัพโหลดไฟล์ได้.");
            }
        } else {
            die("Error: มีบางอย่างผิดพลาดกับไฟล์ของคุณ.");
        }
    } else {
        $photo_path = NULL;
    }

    // เตรียมคำสั่ง SQL เพื่อแทรกข้อมูล
    $stmt = $conn->prepare("INSERT INTO members (
        number_member, date, first_name, surname, dob, age, sex, nationality, company, business_type,
        company_address, moo, soi, road, sub_district, district, province, postal_code, mobile_phone,
        fax, email, line, contact_address, degree, bachelor_faculty, bachelor_major, bachelor_university,
        higher_faculty, higher_major, higher_university, career, other_occupation, membership_type,
        payment_method, transfer_details, data_consent, photo_path
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // ตรวจสอบการเตรียมคำสั่ง
    if ($stmt === false) {
        die("Error: " . $conn->error);
    }

    // ผูกพารามิเตอร์กับคำสั่ง SQL
    $stmt->bind_param(
        "sssssisssssssssssssssssssssssssssssss",
        $number_member,
        $date,
        $first_name,
        $surname,
        $dob,
        $age,
        $sex,
        $nationality,
        $company,
        $business_type,
        $company_address,
        $moo,
        $soi,
        $road,
        $sub_district,
        $district,
        $province,
        $postal_code,
        $mobile_phone,
        $fax,
        $email,
        $line,
        $contact_address,
        $degree,
        $bachelor_faculty,
        $bachelor_major,
        $bachelor_university,
        $higher_faculty,
        $higher_major,
        $higher_university,
        $career,
        $other_occupation,
        $membership_type,
        $payment_method,
        $transfer_details,
        $data_consent,
        $photo_path
    );

    // รันคำสั่ง SQL
    if ($stmt->execute()) {
        $message = "สมัครสมาชิกสำเร็จ!";
    } else {
        $message = "Error: " . $stmt->error;
    }

    // ปิดคำสั่งและการเชื่อมต่อ
    $stmt->close();
    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ข้อมูลแบบฟอร์ม</title>
    <link rel="stylesheet" href="style_php.css">
</head>
<body>
    <?php 
    if (isset($message)) {
        echo "<h2>$message</h2>";
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // แสดงผลข้อมูลในรูปแบบตาราง
        echo "<h2>ข้อมูลในแบบฟอร์ม</h2>";
        echo "<table border='1' cellpadding='10'>";
        echo "<tr><th>เลขที่สมาชิก</th><td>" . check_empty($number_member) . "</td></tr>";
        echo "<tr><th>วันที่</th><td>" . check_empty($date) . "</td></tr>";
        echo "<tr><th>ชื่อ</th><td>" . check_empty($first_name) . "</td></tr>";
        echo "<tr><th>นามสกุล</th><td>" . check_empty($surname) . "</td></tr>";
        echo "<tr><th>วันเกิด</th><td>" . check_empty($dob) . "</td></tr>";
        echo "<tr><th>อายุ</th><td>" . check_empty($age) . "</td></tr>";
        echo "<tr><th>เพศ</th><td>" . check_empty($sex) . "</td></tr>";
        echo "<tr><th>สัญชาติ</th><td>" . check_empty($nationality) . "</td></tr>";
        echo "<tr><th>หน่วยงาน/บริษัท</th><td>" . check_empty($company) . "</td></tr>";
        echo "<tr><th>ประเภทธุรกิจ</th><td>" . check_empty($business_type) . "</td></tr>";
        echo "<tr><th>ที่อยู่บริษัท</th><td>" . check_empty($company_address) . "</td></tr>";
        echo "<tr><th>หมู่</th><td>" . check_empty($moo) . "</td></tr>";
        echo "<tr><th>ตรอก/ซอย</th><td>" . check_empty($soi) . "</td></tr>";
        echo "<tr><th>ถนน</th><td>" . check_empty($road) . "</td></tr>";
        echo "<tr><th>ตำบล/แขวง</th><td>" . check_empty($sub_district) . "</td></tr>";
        echo "<tr><th>อำเภอ/เขต</th><td>" . check_empty($district) . "</td></tr>";
        echo "<tr><th>จังหวัด</th><td>" . check_empty($province) . "</td></tr>";
        echo "<tr><th>รหัสไปรษณีย์</th><td>" . check_empty($postal_code) . "</td></tr>";
        echo "<tr><th>โทรศัพท์มือถือ</th><td>" . check_empty($mobile_phone) . "</td></tr>";
        echo "<tr><th>โทรสาร</th><td>" . check_empty($fax) . "</td></tr>";
        echo "<tr><th>Email</th><td>" . check_empty($email) . "</td></tr>";
        echo "<tr><th>ID Line</th><td>" . check_empty($line) . "</td></tr>";
        echo "<tr><th>ที่อยู่สำหรับติดต่อ</th><td>" . check_empty($contact_address) . "</td></tr>";
        echo "<tr><th>ระดับการศึกษา</th><td>" . check_empty($degree) . "</td></tr>";
        if ($degree == 'bachelor') {
            echo "<tr><th>คณะ (Bachelor)</th><td>" . check_empty($bachelor_faculty) . "</td></tr>";
            echo "<tr><th>สาขาวิชา (Bachelor)</th><td>" . check_empty($bachelor_major) . "</td></tr>";
            echo "<tr><th>สถาบัน/มหาวิทยาลัย (Bachelor)</th><td>" . check_empty($bachelor_university) . "</td></tr>";
        } elseif ($degree == 'master_or_higher') {
            echo "<tr><th>คณะ (Master or Higher)</th><td>" . check_empty($higher_faculty) . "</td></tr>";
            echo "<tr><th>สาขาวิชา (Master or Higher)</th><td>" . check_empty($higher_major) . "</td></tr>";
            echo "<tr><th>สถาบัน/มหาวิทยาลัย (Master or Higher)</th><td>" . check_empty($higher_university) . "</td></tr>";
        }
        echo "<tr><th>อาชีพ</th><td>" . check_empty($career) . "</td></tr>";
        if ($career == 'other') {
            echo "<tr><th>อาชีพอื่นๆ</th><td>" . check_empty($other_occupation) . "</td></tr>";
        }
        echo "<tr><th>ประเภทสมาชิก</th><td>" . check_empty($membership_type) . "</td></tr>";
        echo "<tr><th>วิธีการชำระเงิน</th><td>" . check_empty($payment_method) . "</td></tr>";
        if ($payment_method == 'transfer') {
            echo "<tr><th>รายละเอียดการโอน</th><td>" . check_empty($transfer_details) . "</td></tr>";
        }
        echo "<tr><th>การยินยอมเปิดเผยข้อมูล</th><td>" . check_empty($data_consent) . "</td></tr>";
        if ($photo_path) {
            echo "<tr><th>รูปถ่าย</th><td><img src='$photo_path' alt='Photo' width='100'></td></tr>";
        }
        echo "</table>";
    }
    ?>
</body>
</html>
