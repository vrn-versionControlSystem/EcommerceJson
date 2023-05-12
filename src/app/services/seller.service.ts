import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Signup } from '../DataType';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn=new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient, private router:Router) { }

  // post method
  userSignup(data:Signup)
  {
   
    this.http.post<Signup>
    ("http://localhost:3000/seller", 
      data,
      { observe:"response" })
      .subscribe((result)=>{
            this.isSellerLoggedIn.next(true);
            localStorage.setItem("seller",JSON.stringify(result.body));
            this.router.navigate(['seller-home']);
          }
        );
     
  }
    
  reloadSeller()
  {
    if(localStorage.getItem("seller"))
    {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }


  //Get Method
  userSignupGetData()
  {
   
    return this.http.get<Signup[]>("http://localhost:3000/seller");
  }

  //Get Method by Id
  userSignupGetDataById(data:Signup)
  {
   // console.log(data);
    return this.http.get<Signup>("http://localhost:3000/seller"+data);
  }
  //Put Method by Id
  userSignupPutData(data:Signup)
  {
   // console.log(data);
    return this.http.put<Signup>("http://localhost:3000/seller"+data, data);
  }

  //Delete Method by Id
  userSignupDeleteData(data:Signup)
  {
   // console.log(data);
    return this.http.delete<Signup>("http://localhost:3000/seller"+data);
  }

  

}
