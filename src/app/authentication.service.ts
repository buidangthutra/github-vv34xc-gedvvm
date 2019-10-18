import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  public login(username,password){
    return this.http.post(`api/login`,{username,password}).toPromise()
  }
  public register(){

  }
  public forgotPassword(username){

  }
  
}
