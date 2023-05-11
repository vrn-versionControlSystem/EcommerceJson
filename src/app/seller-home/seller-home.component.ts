import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Signup } from '../DataType';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})

export class SellerHomeComponent {

    takedata:undefined | Signup[];

  constructor(private service:SellerService){}
  ngOnInit()
  {
    this.displayAllSignupData();
  }

  displayAllSignupData()
  {
    this.service.userSignupGetData().subscribe((result)=>{
      this.takedata=result;
    });
  }


}
