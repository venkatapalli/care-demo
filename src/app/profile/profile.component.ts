import { Component, OnInit } from '@angular/core';
//import APIService
import{ ApiService } from '../api.service';
import { Customer_details } from '../customer_details';
import { Subscriber } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  //import APIService
  constructor(private apiService: ApiService) { }
//define users
customer_details:  Customer_details[];
selectedCustomer_details:  Customer_details  = { id :  null , username:null, address:null, email:null, f_member:null, partner_details:  null,length: null};
  ngOnInit() {
    this.apiService.readCustomer_details().subscribe((customer_details: Customer_details[])=>{
      this.customer_details = customer_details;
     console.log(customer_details);
    })
  }
  
  selectCustomer_details(customer_details: Customer_details){
    this.selectedCustomer_details = customer_details;
  }
  createOrUpdateCustomer(form){
    this.apiService.createNewCustomer(form.value).subscribe(res=>{
      console.log(form.value);
      location.reload(true);
    });
}
}
