<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $pass = "deer251246";
        $algo = PASSWORD_BCRYPT;
        $options = ['cost' => 12];
       // $password_verify($$pass,$hashedPassword);
        $hashedPassword = password_hash($pass,PASSWORD_BCRYPT,$options);

        echo $hashedPassword . "</br>";

        if (password_verify($pass, $hashedPassword)){
            
            echo ' Password is valid!';
        } 
        else {
            echo 'Invalid password.';
        }
?>
</body>
</html>