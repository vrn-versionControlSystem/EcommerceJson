import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Signup } from '../DataType';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  // post method
  userSignup(data:Signup)
  {
   // console.log(data);
    return this.http.post<Signup>("http://localhost:3000/seller", data);
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
