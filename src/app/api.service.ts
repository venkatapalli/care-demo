import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Customer_details } from  './customer_details';
import { Observable } from  'rxjs';
import { Order_details } from './order_details';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:1111";
  constructor(private httpClient: HttpClient) { }
  //register
  createCustomer(customer_details: Customer_details): Observable<Customer_details>{
    return this.httpClient.post<Customer_details>(`${this.PHP_API_SERVER}/register.php`, customer_details);
  }
  selectCustomer(customer_details: Customer_details): Observable<Customer_details>{
    return this.httpClient.post<Customer_details>(`${this.PHP_API_SERVER}/register.php`, customer_details);
  }
  //Login
  customer_detailsLogin(customer_details: Customer_details): Observable<Customer_details>{
    return this.httpClient.post<Customer_details>(`${this.PHP_API_SERVER}/login.php`, customer_details);
  }

  //order details
   //read order details from db
   readOrder_details(): Observable<Order_details[]>{
    return this.httpClient.get<Order_details[]>(`${this.PHP_API_SERVER}/order_read.php`);
  }
  //insert order into db
  createOrder_details(order_details: Order_details): Observable<Order_details>{
    //console.log(order_details);
    //console.log(OrderComponent);
    return this.httpClient.post<Order_details>(`${this.PHP_API_SERVER}/order_create.php`, order_details);
  }
  //delete orders into db
  deleteOrder_details(order_id: number){
    return this.httpClient.delete<Order_details>(`${this.PHP_API_SERVER}/order_delete.php/?order_id=${order_id}`);
  }
  //update order details in db
  updateOrder_details(order_id: number){
    return this.httpClient.get<Order_details>(`${this.PHP_API_SERVER}/order_update.php/?order_id=${order_id}`);  
  }
  //read customer details
  readCustomer_details(): Observable<Customer_details[]>{
    return this.httpClient.get<Customer_details[]>(`${this.PHP_API_SERVER}/read.php`);
  }
  //create customer
  createNewCustomer(customer_details: Customer_details): Observable<Customer_details>{
    return this.httpClient.post<Customer_details>(`${this.PHP_API_SERVER}/create.php`, customer_details);
  }
}
