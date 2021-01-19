import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Producto} from "../../interfaces/Producto"
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input()
  data:Producto
  @Input()
  verDetalle:boolean=true;
  @Output()
  reload=new EventEmitter();
  constructor() { }
  eliminar(){
    
    this.reload.emit();
  }
  ngOnInit(): void {
  }

}
