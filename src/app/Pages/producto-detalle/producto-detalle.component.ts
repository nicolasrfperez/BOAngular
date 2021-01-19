import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import {Producto} from "../../interfaces/Producto"
@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto:Producto={
    _id:"",
    name:"",
    description:"",
    sku:"",
    price:0,
    category:{name:""}
  };
  constructor(private route:ActivatedRoute,private prdServ:ProductosService) { 
    const id = this.route.snapshot.paramMap.get("id")
    console.log("Id",id)
    this.prdServ.getById(id)
    .subscribe((data:Producto)=>{
      console.log("data",data)
      this.producto=data;
    })
  }

  ngOnInit(): void {
  }

}
