-- สร้างฐานข้อมูลชื่อ dbhw8
CREATE DATABASE IF NOT EXISTS dbhw8 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- เลือกใช้ฐานข้อมูล dbhw8
USE dbhw8;

-- สร้างตารางสำหรับเก็บข้อมูลสมาชิก
CREATE TABLE IF NOT EXISTS members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_member VARCHAR(50) NOT NULL,
    date DATE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    dob DATE,
    age INT,
    sex ENUM('male', 'female', 'other') NOT NULL,
    nationality VARCHAR(100),
    company VARCHAR(255),
    business_type VARCHAR(255),
    company_address VARCHAR(255),
    moo VARCHAR(10),
    soi VARCHAR(100),
    road VARCHAR(100),
    sub_district VARCHAR(100),
    district VARCHAR(100),
    province VARCHAR(100),
    postal_code VARCHAR(20),
    mobile_phone VARCHAR(15),
    fax VARCHAR(50),
    email VARCHAR(100),
    line VARCHAR(100),
    contact_address ENUM('company', 'home') NOT NULL,
    degree ENUM('vocational', 'high_vocational', 'bachelor', 'master_or_higher') NOT NULL,
    bachelor_faculty VARCHAR(255),
    bachelor_major VARCHAR(255),
    bachelor_university VARCHAR(255),
    higher_faculty VARCHAR(255),
    higher_major VARCHAR(255),
    higher_university VARCHAR(255),
    career ENUM('building_inspector', 'power_inspector', 'electrical_inspector', 'workplace_inspector', 'other') NOT NULL,
    other_occupation VARCHAR(255),
    membership_type ENUM('personal_domestic', 'personal_overseas', 'company_domestic', 'company_overseas') NOT NULL,
    payment_method ENUM('cash', 'transfer') NOT NULL,
    transfer_details TEXT,
    data_consent ENUM('yes', 'no') NOT NULL,
    photo_path VARCHAR(255),
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- แทรกข้อมูลตัวอย่างสมาชิก 20 เรคคอร์ด
INSERT INTO members (
    number_member, date, first_name, surname, dob, age, sex, nationality, company, business_type,
    company_address, moo, soi, road, sub_district, district, province, postal_code, mobile_phone,
    fax, email, line, contact_address, degree, bachelor_faculty, bachelor_major, bachelor_university,
    higher_faculty, higher_major, higher_university, career, other_occupation, membership_type,
    payment_method, transfer_details, data_consent, photo_path
) VALUES
('MB001', '2024-09-21', 'นภา', 'ขิมเผือยนท์', '1985-05-15', 39, 'female', 'ไทย', 'บริษัท สมาร์ทเทค', 'เทคโนโลยี',
 '123/45 หมู่ 6 ซอยสุขุมวิท 11 ถนนพระราม 3', '6', 'สุขุมวิท 11', 'พระราม 3', 'คลองตัน', 'คลองเตย', 'กรุงเทพมหานคร', '10110',
 '081-234-5678', '02-123-4567', 'napa.k@example.com', 'napa_line', 'company', 'bachelor', 'วิศวกรรมศาสตร์', 'วิศวกรรมโยธา', 'จุฬาลงกรณ์มหาวิทยาลัย',
 NULL, NULL, NULL, 'building_inspector', NULL, 'personal_domestic', 'transfer',
 'โอนเงินธนาคารกสิกร 123-4-56789-0', 'yes', 'uploads/photo1.jpg'),

('MB002', '2024-09-21', 'สมชาย', 'ใจดี', '1990-08-22', 34, 'male', 'ไทย', 'บริษัท ไอทีพาวเวอร์', 'พลังงาน',
 '456/78 หมู่ 3 ซอยลาดพร้าว 12 ถนนพระราม 6', '3', 'ลาดพร้าว 12', 'พระราม 6', 'จอมทอง', 'วังทองหลาง', 'กรุงเทพมหานคร', '10330',
 '082-345-6789', '02-234-5678', 'somchai.j@example.com', 'somchai_line', 'home', 'master_or_higher', 'บริหารธุรกิจ', 'การตลาด', 'มหาวิทยาลัยธรรมศาสตร์',
 'วิศวกรรมไฟฟ้า', 'วิศวกรรมพลังงาน', 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', 'power_inspector', NULL, 'personal_domestic', 'cash',
 NULL, 'yes', 'uploads/photo2.jpg'),

('MB003', '2024-09-21', 'อนันต์', 'สมบูรณ์', '1978-12-05', 45, 'male', 'ไทย', 'บริษัท เอ็นจิเนียริ่ง', 'วิศวกรรม',
 '789/10 หมู่ 1 ซอยลาดพร้าว 5 ถนนสุขุมวิท 49', '1', 'ลาดพร้าว 5', 'สุขุมวิท 49', 'จอมทอง', 'วัฒนา', 'กรุงเทพมหานคร', '10110',
 '083-456-7890', '02-345-6789', 'anan.s@example.com', 'anan_line', 'company', 'bachelor', 'วิศวกรรมศาสตร์', 'วิศวกรรมไฟฟ้า', 'มหาวิทยาลัยเกษตรศาสตร์',
 NULL, NULL, NULL, 'electrical_inspector', NULL, 'company_domestic', 'transfer',
 'โอนเงินธนาคารไทยพาณิชย์ 140-2-35560-9', 'no', 'uploads/photo3.jpg'),

('MB004', '2024-09-21', 'ศิริ', 'เมตตา', '1982-07-19', 42, 'female', 'ไทย', 'บริษัท สถาปัตย์ไทย', 'สถาปัตยกรรม',
 '321/54 หมู่ 2 ซอยลาดพร้าว 10 ถนนราชเทวี', '2', 'ลาดพร้าว 10', 'ราชเทวี', 'วัฒนา', 'วัฒนา', 'กรุงเทพมหานคร', '10130',
 '084-567-8901', '02-456-7890', 'siri.m@example.com', 'siri_line', 'home', 'high_vocational', 'สถาปัตยกรรมศาสตร์', 'ออกแบบสถาปัตยกรรม', 'มหาวิทยาลัยศิลปากร',
 NULL, NULL, NULL, 'workplace_inspector', NULL, 'personal_domestic', 'cash',
 NULL, 'yes', 'uploads/photo4.jpg'),

('MB005', '2024-09-21', 'ณัฐวุฒิ', 'ทองดี', '1988-03-10', 36, 'male', 'ไทย', 'บริษัท ก่อสร้างใหม่', 'ก่อสร้าง',
 '654/32 หมู่ 4 ซอยลาดพร้าว 20 ถนนพระราม 4', '4', 'ลาดพร้าว 20', 'พระราม 4', 'ลาดพร้าว', 'วังทองหลาง', 'กรุงเทพมหานคร', '10230',
 '085-678-9012', '02-567-8901', 'nattawut.t@example.com', 'nattawut_line', 'company', 'bachelor', 'วิศวกรรมศาสตร์', 'วิศวกรรมโยธา', 'จุฬาลงกรณ์มหาวิทยาลัย',
 NULL, NULL, NULL, 'building_inspector', NULL, 'personal_overseas', 'transfer',
 'โอนเงินธนาคารกรุงไทย 123-4-56789-1', 'yes', 'uploads/photo5.jpg'),

('MB006', '2024-09-21', 'พรเทพ', 'สุขใจ', '1992-11-30', 31, 'male', 'ไทย', 'บริษัท ไซเบอร์นวัตน์', 'เทคโนโลยีสารสนเทศ',
 '987/65 หมู่ 5 ซอยลาดพร้าว 25 ถนนสุขุมวิท 3', '5', 'ลาดพร้าว 25', 'สุขุมวิท 3', 'วัฒนา', 'วัฒนา', 'กรุงเทพมหานคร', '10110',
 '086-789-0123', '02-678-9012', 'porntep.s@example.com', 'porntep_line', 'home', 'bachelor', 'วิทยาศาสตร์คอมพิวเตอร์', 'การพัฒนาเว็บ', 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
 NULL, NULL, NULL, 'electrical_inspector', NULL, 'personal_domestic', 'cash',
 NULL, 'yes', 'uploads/photo6.jpg'),

('MB007', '2024-09-21', 'จิราพร', 'ดีใจ', '1980-04-25', 44, 'female', 'ไทย', 'บริษัท สมัยใหม่', 'พลังงาน',
 '159/753 หมู่ 7 ซอยลาดพร้าว 30 ถนนลาดพร้าว', '7', 'ลาดพร้าว 30', 'ลาดพร้าว', 'ลาดพร้าว', 'วัฒนา', 'กรุงเทพมหานคร', '10120',
 '087-890-1234', '02-789-0123', 'jiraporn.d@example.com', 'jiraporn_line', 'company', 'master_or_higher', 'บริหารธุรกิจ', 'การจัดการพลังงาน', 'มหาวิทยาลัยธรรมศาสตร์',
 'วิศวกรรมพลังงาน', 'วิศวกรรมพลังงาน', 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', 'power_inspector', NULL, 'company_domestic', 'transfer',
 'โอนเงินธนาคารกรุงศรีอยุธยา 140-2-35560-10', 'yes', 'uploads/photo7.jpg'),

('MB008', '2024-09-21', 'อนันต์', 'รักดี', '1995-09-12', 29, 'male', 'ไทย', 'บริษัท ดีเทค', 'เทคโนโลยี',
 '753/159 หมู่ 8 ซอยลาดพร้าว 35 ถนนพหลโยธิน', '8', 'ลาดพร้าว 35', 'พหลโยธิน', 'พหลโยธิน', 'บางนา', 'กรุงเทพมหานคร', '10260',
 '088-901-2345', '02-890-1234', 'anan.r@example.com', 'ananr_line', 'home', 'bachelor', 'วิศวกรรมศาสตร์', 'วิศวกรรมเครื่องกล', 'มหาวิทยาลัยเกษตรศาสตร์',
 NULL, NULL, NULL, 'workplace_inspector', NULL, 'personal_overseas', 'cash',
 NULL, 'no', 'uploads/photo8.jpg'),

('MB009', '2024-09-21', 'กิตติ์', 'ศรีสุข', '1986-02-18', 38, 'male', 'ไทย', 'บริษัท บีเอสเอ', 'วิศวกรรม',
 '852/741 หมู่ 9 ซอยลาดพร้าว 40 ถนนราชเทวี', '9', 'ลาดพร้าว 40', 'ราชเทวี', 'ราชเทวี', 'วัฒนา', 'กรุงเทพมหานคร', '10150',
 '089-012-3456', '02-901-2345', 'kit.s@example.com', 'kit_line', 'company', 'bachelor', 'วิศวกรรมโยธา', 'การก่อสร้าง', 'จุฬาลงกรณ์มหาวิทยาลัย',
 NULL, NULL, NULL, 'building_inspector', NULL, 'company_overseas', 'transfer',
 'โอนเงินธนาคารกรุงไทย 140-2-35560-11', 'yes', 'uploads/photo9.jpg'),

('MB010', '2024-09-21', 'ดารณี', 'พรหม', '1993-06-07', 31, 'female', 'ไทย', 'บริษัท โอเมก้า', 'พลังงาน',
 '951/357 หมู่ 10 ซอยลาดพร้าว 45 ถนนลาดพร้าว', '10', 'ลาดพร้าว 45', 'ลาดพร้าว', 'ลาดพร้าว', 'วัฒนา', 'กรุงเทพมหานคร', '10150',
 '090-123-4567', '02-012-3456', 'darani.p@example.com', 'darani_line', 'home', 'high_vocational', 'วิศวกรรมพลังงาน', 'การจัดการพลังงาน', 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
 NULL, NULL, NULL, 'power_inspector', NULL, 'personal_domestic', 'cash',
 NULL, 'yes', 'uploads/photo10.jpg'),

('MB011', '2024-09-21', 'อภิชาติ', 'กลิ่นดี', '1984-10-20', 40, 'male', 'ไทย', 'บริษัท ไซเบอร์กรุ๊ป', 'เทคโนโลยี',
 '357/159 หมู่ 11 ซอยลาดพร้าว 50 ถนนลาดพร้าว', '11', 'ลาดพร้าว 50', 'ลาดพร้าว', 'ลาดพร้าว', 'วัฒนา', 'กรุงเทพมหานคร', '10150',
 '091-234-5678', '02-123-4567', 'apichat.g@example.com', 'apichat_line', 'company', 'bachelor', 'วิทยาการคอมพิวเตอร์', 'การพัฒนาแอปพลิเคชัน', 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
 NULL, NULL, NULL, 'electrical_inspector', NULL, 'personal_domestic', 'transfer',
 'โอนเงินธนาคารกสิกร 140-2-35560-12', 'no', 'uploads/photo11.jpg'),

('MB012', '2024-09-21', 'พัชร', 'มงคล', '1991-01-30', 33, 'female', 'ไทย', 'บริษัท เมก้า', 'ก่อสร้าง',
 '753/951 หมู่ 12 ซอยลาดพร้าว 55 ถนนราชเทวี', '12', 'ลาดพร้าว 55', 'ราชเทวี', 'ราชเทวี', 'วัฒนา', 'กรุงเทพมหานคร', '10150',
 '092-345-6789', '02-234-5678', 'patcha.m@example.com', 'patcha_line', 'home', 'master_or_higher', 'บริหารธุรกิจ', 'การจัดการโครงการ', 'มหาวิทยาลัยธรรมศาสตร์',
 'วิศวกรรมโยธา', 'การก่อสร้าง', 'จุฬาลงกรณ์มหาวิทยาลัย', 'workplace_inspector', NULL, 'personal_overseas', 'cash',
 NULL, 'yes', 'uploads/photo12.jpg'),

('MB013', '2024-09-21', 'วิทยา', 'ปรีชาญาณ', '1987-09-09', 37, 'male', 'ไทย', 'บริษัท ซัมมิทเทค', 'เทคโนโลยี',
 '159/357 หมู่ 13 ซอยลาดพร้าว 60 ถนนลาดพร้าว', '13', 'ลาดพร้าว 60', 'ลาดพร้าว', 'ลาดพร้าว', 'วัฒนา', 'กรุงเทพมหานคร', '10150',
 '093-456-7890', '02-345-6789', 'vithaya.p@example.com', 'vithaya_line', 'company', 'bachelor', 'วิศวกรรมไฟฟ้า', 'การออกแบบระบบไฟฟ้า', 'มหาวิทยาลัยเกษตรศาสตร์',
 NULL, NULL, NULL, 'building_inspector', NULL, 'company_domestic', 'transfer',
 'โอนเงินธนาคารไทยพาณิชย์ 140-2-35560-13', 'yes', 'uploads/photo13.jpg'),

('MB014', '2024-09-21', 'จุฑารัตน์', 'มาลัย', '1983-04-14', 41, 'female', 'ไทย', 'บริษัท ดีไอแอล', 'วิศวกรรม',
 '951/753 หมู่ 14 ซอยลาดพร้าว 65 ถนนพหลโยธิน', '14', 'ลาดพร้าว 65', 'พหลโยธิน', 'พหลโยธิน', 'บางนา', 'กรุงเทพมหานคร', '10260',
 '094-567-8901', '02-456-7890', 'jutharat.m@example.com', 'jutharat_line', 'home', 'high_vocational', 'วิศวกรรมเครื่องกล', 'การบำรุงรักษาเครื่องจักร', 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
 NULL, NULL, NULL, 'electrical_inspector', NULL, 'personal_overseas', 'cash',
 NULL, 'no', 'uploads/photo14.jpg'),

('MB015', '2024-09-21', 'กานต์', 'ศรีสุข', '1994-07-21', 30, 'male', 'ไทย', 'บริษัท ไอทีโซลูชั่น', 'เทคโนโลยีสารสนเทศ',
 '753/159 หมู่ 15 ซอยลาดพร้าว 70 ถนนราชเทวี', '15', 'ลาดพร้าว 70', 'ราชเทวี', 'ราชเทวี', 'วัฒนา', 'กรุงเทพมหานคร', '10150',
 '095-678-9012', '02-567-8901', 'kant.s@example.com', 'kant_line', 'company', 'bachelor', 'วิทยาการคอมพิวเตอร์', 'การพัฒนาโปรแกรม', 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
 NULL, NULL, NULL, 'power_inspector', NULL, 'company_overseas', 'transfer',
 'โอนเงินธนาคารกรุงเทพ 140-2-35560-14', 'yes', 'uploads/photo15.jpg'),

('MB016', '2024-09-21', 'ลัดดา', 'วรรณา', '1996-05-05', 28, 'female', 'ไทย', 'บริษัท เอ็มโกล', 'ก่อสร้าง',
 '357/951 หมู่ 16 ซอยลาดพร้าว 75 ถนนลาดพร้าว', '16', 'ลาดพร้าว 75', 'ลาดพร้าว', 'ลาดพร้าว', 'วัฒนา', 'กรุงเทพมหานคร', '10150',
 '096-789-0123', '02-678-9012', 'ladda.w@example.com', 'ladda_line', 'home', 'bachelor', 'วิศวกรรมโยธา', 'การออกแบบโครงการ', 'จุฬาลงกรณ์มหาวิทยาลัย',
 NULL, NULL, NULL, 'workplace_inspector', NULL, 'personal_domestic', 'cash',
 NULL, 'yes', 'uploads/photo16.jpg'),

('MB017', '2024-09-21', 'สมภพ', 'ดีใจ', '1989-11-11', 35, 'male', 'ไทย', 'บริษัท สยามเทคโนโลยี', 'เทคโนโลยี',
 '159/753 หมู่ 17 ซอยลาดพร้าว 80 ถนนราชเทวี', '17', 'ลาดพร้าว 80', 'ราชเทวี', 'ราชเทวี', 'วัฒนา', 'กรุงเทพมหานคร', '10150',
 '097-890-1234', '02-789-0123', 'sompob.d@example.com', 'sompob_line', 'company', 'master_or_higher', 'วิศวกรรมไฟฟ้า', 'การวางระบบไฟฟ้า', 'มหาวิทยาลัยเกษตรศาสตร์',
 'วิศวกรรมไฟฟ้า', 'การวางระบบไฟฟ้า', 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', 'electrical_inspector', NULL, 'company_domestic', 'transfer',
 'โอนเงินธนาคารกสิกรไทย 140-2-35560-15', 'no', 'uploads/photo17.jpg'),

('MB018', '2024-09-21', 'นันทนา', 'พงศ์ดี', '1997-02-28', 27, 'female', 'ไทย', 'บริษัท โกลบอลเทค', 'เทคโนโลยี',
 '951/357 หมู่ 18 ซอยลาดพร้าว 85 ถนนพหลโยธิน', '18', 'ลาดพร้าว 85', 'พหลโยธิน', 'พหลโยธิน', 'บางนา', 'กรุงเทพมหานคร', '10260',
 '098-901-2345', '02-890-1234', 'nannana.p@example.com', 'nannana_line', 'home', 'bachelor', 'วิทยาการคอมพิวเตอร์', 'การพัฒนาแอปพลิเคชัน', 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
 NULL, NULL, NULL, 'other', 'นักพัฒนาซอฟต์แวร์', 'personal_overseas', 'cash',
 NULL, 'yes', 'uploads/photo18.jpg'),

('MB019', '2024-09-21', 'ภัทร', 'เจริญสุข', '1981-03-17', 43, 'male', 'ไทย', 'บริษัท สถาปัตย์ไทย', 'สถาปัตยกรรม',
 '753/159 หมู่ 19 ซอยลาดพร้าว 90 ถนนราชเทวี', '19', 'ลาดพร้าว 90', 'ราชเทวี', 'ราชเทวี', 'วัฒนา', 'กรุงเทพมหานคร', '10150',
 '099-012-3456', '02-901-2345', 'pat.p@example.com', 'pat_line', 'company', 'bachelor', 'สถาปัตยกรรมศาสตร์', 'การออกแบบสถาปัตยกรรม', 'จุฬาลงกรณ์มหาวิทยาลัย',
 NULL, NULL, NULL, 'building_inspector', NULL, 'company_overseas', 'transfer',
 'โอนเงินธนาคารไทยพาณิชย์ 140-2-35560-16', 'yes', 'uploads/photo19.jpg'),

('MB020', '2024-09-21', 'ศิริพร', 'มิ่งขวัญ', '1998-08-08', 26, 'female', 'ไทย', 'บริษัท อินโนเทค', 'เทคโนโลยี',
 '357/951 หมู่ 20 ซอยลาดพร้าว 95 ถนนลาดพร้าว', '20', 'ลาดพร้าว 95', 'ลาดพร้าว', 'ลาดพร้าว', 'วัฒนา', 'กรุงเทพมหานคร', '10150',
 '090-123-4567', '02-012-3456', 'siriporn.m@example.com', 'siriporn_line', 'home', 'bachelor', 'วิศวกรรมศาสตร์', 'วิศวกรรมเครื่องกล', 'มหาวิทยาลัยเกษตรศาสตร์',
 NULL, NULL, NULL, 'other', 'วิศวกรเครื่องกล', 'personal_domestic', 'cash',
 NULL, 'no', 'uploads/photo20.jpg');
