import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb:FormBuilder,private usrServ:UsuariosService) { 
    this.myForm=this.fb.group({
      name:["",[Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }
  registro(){
    console.log(this.myForm.value)
    this.usrServ.create(this.myForm.value)
    .subscribe(
      data=>{
        console.log("data",data)
        
      },
      err=>{
        console.log("Error",err)
      }
    )


  }

  ngOnInit(): void {
  }

}
