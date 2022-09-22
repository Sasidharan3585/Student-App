import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private basePath= 'http://localhost:9091/user'

  constructor(private http:HttpClient) {}

  sendDetails(user:any){
    return this.http.post(`${this.basePath}/login`,user)
  }

  addUser(user:any){
    return this.http.post(`${this.basePath}/create`,user,{responseType: 'text' as 'json'})
  }

  userLogin(token:any){
    localStorage.setItem("token",token);
    return true;
  }

  isLoggedIn(){
    let token =localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }
    else{
      return true;
    }
  }

  logOut(){
    localStorage.removeItem("token");
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }


   
}


