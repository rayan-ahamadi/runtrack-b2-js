<?php

if($_SERVER['REQUEST_METHOD'] === "GET"){

  $email = $_GET["email"];


  function connectDB() : PDO{
    try{
      $conn = new PDO('mysql:host=localhost;dbname=Ip_official', 'rayan', 'qxd8enkm');
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $conn;
    }
    catch(Exception $e){
      return array(
        "message" => "Error on the query",
        "Exception" => $e
      );
    }
  }
  
  function my_search_student(string $email) : array{
    try{
      $conn = connectDB();

      if(!$conn){
        return array(
          "message" => "failed to connect to DB"
        );
      }

      $query = $conn->prepare("SELECT * FROM student WHERE email = ?");
      $query->execute([$email]);
      
      $result = $query->fetchAll(\PDO::FETCH_ASSOC);

      if (!empty($result)){
        return $result[0];
      }

      return json_encode([
        "message" => "This student does not exist"
      ]);


    }
    catch(Exception $e){
      return array(
        "message" => "Error on the query"
      );
    }
  }

  echo json_encode(my_search_student($email));


}







?>