<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  // print_r($request);
  if(trim($request->username) === '' ||trim($request->address) === '' ||trim($request->email) === '' ||trim($request->f_member) === '' || trim($request->partner_details) === '')
  {
    return http_response_code(400);
  }

  // Sanitize.
  $username = mysqli_real_escape_string($con, trim($request->username));
  $address = mysqli_real_escape_string($con, trim($request->address));
  $email = mysqli_real_escape_string($con, trim($request->email));
  $f_member = mysqli_real_escape_string($con, trim($request->f_member));
  $partner_details = mysqli_real_escape_string($con, trim($request->partner_details));
  $password = 'abc123';
  // Create.
  $sql = "INSERT INTO `customers`(`username`,`address`, `email`, `f_member`,`partner_details`,`password`) VALUES ('{$username}','{$address}','{$email}','{$f_member}','{$partner_details}','{$password}')";
  // print_r($sql);
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $customer_details = [
      'username' => $username,
      'address' => $address,
      'email' => $email,
      'f_member' => $f_member,
      'partner_details' => $partner_details,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($customer_details);

  }
  else
  {
    http_response_code(422);
  }
}