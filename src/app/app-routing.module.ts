import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProductoDetalleComponent } from './Pages/producto-detalle/producto-detalle.component';
import { ProductosAltaComponent } from './Pages/productos-alta/productos-alta.component';
import { ProductosListadoComponent } from './Pages/productos-listado/productos-listado.component';
import { RegistroComponent } from './Pages/registro/registro.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contacto",canActivate:[AuthGuard],component:ContactoComponent},
  {path:"login",component:LoginComponent},
  {path:"registro",component:RegistroComponent},
  {path:"producto/new",component:ProductosAltaComponent},
  {path:"producto/:id",component:ProductoDetalleComponent},
  {path:"productos",component:ProductosListadoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
