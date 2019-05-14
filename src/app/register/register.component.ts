import { Component, OnInit } from '@angular/core';
import{ ApiService } from '../api.service';
import { Register } from '../customer_details';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  customer_details:  Register[];
	selectedCustomer_details:  Register  = { id :  null , username:null, address:null, email:null, f_member:null, partner_details: null, password: null};
  ngOnInit() {
  }
  createOrUpdateCustomer(form){
    this.apiService.createCustomer(form.value).subscribe(res=>{
      console.log(form.value);
      location.reload(true);
    });
}
selectCustomer(customer_details: Register){
  this.selectedCustomer_details = customer_details;
}
}
