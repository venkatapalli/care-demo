import { Component, OnInit } from '@angular/core';
import{ ApiService } from '../api.service';
import { Login } from '../customer_details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService,
    public router: Router) { }

customer_details:  Login[];
selectedCustomer_details:  Login  = { username:null, password :  null};

  ngOnInit() {
  }

  customer_login(form){
    console.log(form.value);
         this.apiService.customer_detailsLogin(form.value).subscribe(res=>{
         console.log("Customer Details", res.length);
           if(res.length != 0)
           {
             console.log("Customer Existed");
             this.router.navigate(['profile']);
           }
           else
           {
             console.log("Customer not Existed");
             location.reload(true);
           }
         });
   
     }
   
     login(customer_details: Login){
       this.selectedCustomer_details = customer_details;
       console.log("Customer Details created, ", customer_details);
     }
}
