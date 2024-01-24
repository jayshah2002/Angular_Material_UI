import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url:string="http://localhost:3000/";
  constructor(private http:HttpClient) { }


  saveUser(data:any){
    return this.http.post(`${this._url}users`, data);
  }

  getUsers(){
    return this.http.get(`${this._url}user`);
  }
  deleteUsers(email:string){
    return this.http.delete(`${this._url}deluser/${email}`);
  }

  auth(data:any){
    return this.http.post(`${this._url}auth`,data)
  }
}
