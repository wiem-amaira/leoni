<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "", "leoni-store");

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$label=$_POST['label'];
$prix= $_POST['prix'];
$image= $_POST['image'];
$id = rand(0, 1000000000);

$sql="INSERT INTO product VALUES ('$id','$label','$prix', '$image')";

// Attempt insert query execution
if(mysqli_query($link, $sql)){
    echo "Records inserted successfully.";
    header('Location: http://localhost:4200/main/private/products');
    exit();
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

// Close connection
mysqli_close($link);
?>