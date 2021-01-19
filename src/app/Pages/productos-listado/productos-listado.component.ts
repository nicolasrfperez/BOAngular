import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto-listado',
  templateUrl: './productos-listado.component.html',
  styleUrls: ['./productos-listado.component.css']
})
export class ProductosListadoComponent implements OnInit {
  rows:any[]=[]
  page={
    totalElements:0,
    pageNumber:0,
    size:3
  }
  columns=[]
  constructor(private productService:ProductosService) { 
    this.page["pageNumber"] = 0;
    this.page["size"] = 3;
    //Nombre -> Listado, Prop -> atributo json
    this.columns=[{ name: 'Nombre',prop:'name' }, { name: 'Precio',prop:'price_currency' }, { name: 'sku',prop:'sku' }]
  }
  setPage(pageInfo){
    this.productService.getAll(pageInfo).subscribe(data=>{
      console.log(data)
      //REgistros de productos (Informacion)
      this.rows=data["docs"]
      console.log(this.rows)
      //Cantidad total de productos 
      this.page["totalElements"] = data["totalDocs"]
      //Cantidad de registros por pagina
      this.page["size"] = data["limit"]
      //La pagina que estoy consultando
      this.page["pageNumber"] = pageInfo["offset"]
      console.log(this.page)
    })
  }
  eliminar(id){
    console.log(id)
    /*this.productService.delete(id).subscribe(data=>{
      console.log("Eliminar",data)
      this.setPage({ offset: 0 });
    })*/
  }
  ngOnInit(): void {
    //SetPage en base a una pagina consulta productos a express
    this.setPage({ offset: 0 });
  }

}
