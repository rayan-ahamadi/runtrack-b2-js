<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $email = $_POST['email']; 
  $fullname = $_POST['fullname'];    
  $gender = $_POST['gender'];
  $grade = $_POST['grade'];
  $birthdate = $_POST['birthdate']; 

  function connectDB() : PDO{
    try{
      $conn = new PDO('mysql:host=localhost;dbname=Ip_official', 'rayan', 'qxd8enkm');
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $conn;
    }
    catch(Exception $e){
      return $e;
    }
  }

  function my_insert_student(string $email, string $fullname, string $genre, int $grade_id, string $birthdate) : bool {
    $conn = connectDB();

    if(!$conn){
      echo json_encode(array(
        "message" => "Erreur serveur"
      ));
      return false;
    }

    try{
      $query = $conn->prepare('INSERT INTO student (grade_id,email,fullname,birthdate,gender) VALUES (?,?,?,?,?)');
      $query->execute([$grade_id,$email,$fullname,$birthdate,$genre]);  
  
      if($query){
        echo json_encode(array(
          "message" => "Student registered successfully"
        ));
        return true;
      }
    }
    catch(Exception $e){
      echo json_encode( array(
        "message" => "Error in adding a new student",
        "Exception" => $e
      ));
      return false;
    }
  
  }

  my_insert_student($email,$fullname,$gender,$grade,$birthdate);


  

}





?>