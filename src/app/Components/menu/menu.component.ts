import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLogin:boolean=false;
  constructor(private usrServ:UsuariosService) { 
    this.usrServ.isAuthenticate()
    .subscribe(login=>{
      console.log("Login",login)
      this.isLogin=login;
    })
  }
  logout(){
    this.usrServ.logout();
  }
  ngOnInit(): void {
  }

}
