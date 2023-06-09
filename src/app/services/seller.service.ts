import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Signup, login } from '../DataType';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn=new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false);

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

  userloginData(data:login)
  {
     this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, {observe:"response"}).subscribe((result:any)=>{

        console.log(result);
        if(result && result.body && result.body.length)
        {
            console.log("Login Successfull");
            localStorage.setItem("seller",JSON.stringify(result.body));
            this.router.navigate(['seller-home']);
        }
        else
        {
          console.log("Login Failed");
          this.isLoginError.emit(true);
        }


     });
  }  




}
