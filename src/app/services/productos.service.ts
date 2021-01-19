import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  getAll(pageInfo=null){
    let query='';
    //PageInfo en offset recibe pagina -1, cuando consulta a express lo envia por query string
    if(pageInfo){
      query='?page='+(pageInfo["offset"]+1)
    }
    return this.http.get(environment.endpointApi+"productos"+query)
    
  }
  getById(id:string){
    return this.http.get(environment.endpointApi+"productos/"+id)
  }
  create(data){
    return this.http.post(environment.endpointApi+"productos/",data)
  }
}
