DROP DATABASE IF EXISTS `pennacare`;
CREATE DATABASE IF NOT EXISTS `pennacare`;
CREATE  TABLE  IF NOT EXISTS orders( order_id int(11) not null auto_increment, product_name varchar(50), order_total float,customer_id int(11) not null, primary key(order_id));
CREATE  TABLE  IF NOT EXISTS customers( id int not null auto_increment, username varchar(20),address varchar(100),email varchar(40),f_member varchar(20) ,partner_details varchar(250),`password` VARCHAR(255), primary key(id));
