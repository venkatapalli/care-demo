<?php
require 'database.php';

$postdata = file_get_contents("php://input");
// print_r($postdata);exit();
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  if(trim($request->password) === '' || trim($request->username) === '')
  {
    return http_response_code(400);
  }

  // Sanitize.
  $username = mysqli_real_escape_string($con, trim($request->username));
  $password = mysqli_real_escape_string($con, trim($request->password));
  $customers = [];
  $row = "SELECT * FROM `customers` WHERE `username` LIKE '{$username}' and `password` LIKE '{$password}'";

  if($result = mysqli_query($con,$row))
  {
  	while($row = mysqli_fetch_assoc($result))
  {
    $customers['id']    = $row['id'];
    $customers['username'] = $row['username'];
    $customers['address'] = $row['address'];
    $customers['email'] = $row['email'];
    $customers['f_member'] = $row['f_member'];
    $customers['partner_details'] = $row['partner_details'];

 }
   echo json_encode($customers);
    // http_response_code(200);

  }
  else
  {
    http_response_code(422);
  }
}