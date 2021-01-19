import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  routes:string="users/";
  //Instancia el BehaviorSubjet
  //False -> No esta logueado
  //True -> Esta logueado
  authenticationState = new BehaviorSubject((localStorage.getItem("token")?true:false));
  constructor(private http:HttpClient) { }
  create(datos){
    return this.http.post(environment.endpointApi+"users/"+"web/registro",datos)
  }
  login(email:string,password:string){
    return this.http.post(environment.endpointApi+this.routes+"web/login",{
      email:email,
      password:password
    })
  }
  logout(){
    localStorage.removeItem("token");
    this.authenticationState.next(false);
  }
  authenticate(token:string){
    localStorage.setItem("token",token);
    this.authenticationState.next(true);
  }
  isAuthenticate(){
    return this.authenticationState;
  }
  isAuthenticated(){
    return this.authenticationState.value;
  }
}
