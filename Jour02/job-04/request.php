<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  function connectDB(){
    try{
      $conn = new PDO('mysql:host=localhost;dbname=Ip_official', 'rayan', 'qxd8enkm');
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $conn;
    }
    catch(Exception $e){
      return $e;
    }
  }
  
  $email = $_POST['email']; 
  $fullname = $_POST['fullname'];    
  $gender = $_POST['gender'];
  $grade = $_POST['grade'];
  $birthdate = $_POST['birthdate'];   

  $conn = connectDB();

  try{
    $query = $conn->prepare('INSERT INTO student (grade_id,email,fullname,birthdate,gender) VALUES (?,?,?,?,?)');
    $query->execute([$grade,$email,$fullname,$birthdate,$gender]);  

    if($query){
      echo json_encode(array(
        "message" => "Student successfully added"
      )
      );
    }
  }
  catch(Exception $e){
    echo json_encode( array(
      "message" => "Error in adding a new student",
      "Exception" => $e
    )
    );
      

  }


  

}





?>