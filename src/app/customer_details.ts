export  class  Customer_details {
    id: number;
    username:  string;
    address:  string;
    email:  string;
    f_member:  string;
    partner_details:  number;
    length: number;

}
export interface Register {
    id: number;
    username:  string;
    address:  string;
    email:  string;
    f_member:  string;
    partner_details:  number;
    password: string;
   
}
export interface Login {
    username: string;
    password: string;
}
export  class  Order_details {
    order_id: number;
    product_name:  string;
    order_total:  number;
    customer_id: number;
    firstname: string;
}