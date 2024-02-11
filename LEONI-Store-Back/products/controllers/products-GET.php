<?php
echo "<html><head><link rel = 'stylesheet' href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'/>   </head><body>";
echo "<div class='container-fluid'><div class='mt-2 w-100 d-flex align-items-center justify-content-end'>";
echo "<div class='btn btn-secondary'><a href='http://localhost:4200/main/private/products'>Retourner à l'application</a></div>";
echo "</div></div>";

$link = mysqli_connect("localhost", "root", "", "leoni-store");

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$sql="SELECT * From product";

if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result) > 0){
        echo "<table class='table table-responsive table-primary table-bordered'>";
            echo "<tr class='bg-primary'>";
                echo "<th>#</th>";
                echo "<th>Label</th>";
                echo "<th>Prix</th>";
                echo "<th>Image</th>";
            echo "</tr>";
        while($row = mysqli_fetch_array($result)){
            echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['label'] . "</td>";
                echo "<td>" . $row['prix'] . "</td>";
                echo "<td><img style='width:45px' src='data:image/jpg n,;base64,".base64_encode($row['image'])."'/></td>";
            echo "</tr>";
        }
        echo "</table></div>";
        // Free result set
        mysqli_free_result($result);
    } else{
        echo "No records matching your query were found.";
    }
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

// Close connection
mysqli_close($link);
echo "</body></html>";
?>