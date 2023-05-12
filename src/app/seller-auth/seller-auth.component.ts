import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Signup } from '../DataType';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  takedata:undefined| Signup;


  constructor(private service:SellerService, private router:Router){}

  ngOnInit()
  {
    this.service.reloadSeller();
  } 


  signup(signupdata:any)
  {

   
    this.service.userSignup(signupdata);

  }


}
