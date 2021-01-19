import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Login} from "../../interfaces/Usuarios";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb:FormBuilder,private usrServ:UsuariosService,private router:Router,private _snackBar: MatSnackBar) { 
    this.myForm=this.fb.group({
      email:["",[Validators.required,Validators.minLength(3)]],
      password:["",[Validators.required]]
    })
  }
  login(){
    console.log(this.myForm.get("email"))
    this.usrServ.login(this.myForm.get("email").value,this.myForm.get("password").value)
    .subscribe(
      (data:Login)=>{
        console.log("Success",data)
        if(data.token){
          //alert("Login exitoso");
          this.usrServ.authenticate(data.token)
          this._snackBar.open("Bienvenido/a",null, {
            duration: 2000,
          });
          this.router.navigateByUrl("/")//Redirije
        }else{
          //alert(data["message"]);
          this._snackBar.open(data.message,null, {
            duration: 2000,
            panelClass:["mat-primary"]
          });
        }
      },
      err=>{
        console.log("Error",err)
      }
    )
  }
  ngOnInit(): void {
  }

}
