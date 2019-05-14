<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$customers = [];
$sql = "SELECT customers.id, customers.username, customers.address, customers.email, customers.f_member,customers.partner_details FROM customers";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $customers[$i]['id']    = $row['id'];
    $customers[$i]['username'] = $row['username'];
    $customers[$i]['address'] = $row['address'];
    $customers[$i]['email'] = $row['email'];
    $customers[$i]['f_member'] = $row['f_member'];
    $customers[$i]['partner_details'] = $row['partner_details'];
    $i++;
  }

  echo json_encode($customers);
}
else
{
  http_response_code(404);
}