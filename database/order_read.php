<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$orders = [];
$sql = "SELECT orders.order_id, orders.product_name, orders.order_total, customers.username FROM orders INNER JOIN customers ON orders.customer_id=customers.id ";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $orders[$i]['order_id']    = $row['order_id'];
    $orders[$i]['product_name'] = $row['product_name'];
    $orders[$i]['order_total'] = $row['order_total'];
    $orders[$i]['username']    = $row['username'];
    $i++;
  }

  echo json_encode($orders);
}
else
{
  http_response_code(404);
}