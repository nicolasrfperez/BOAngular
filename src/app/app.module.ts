import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms' //Incluir
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; //Incluir
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ProductoDetalleComponent } from './Pages/producto-detalle/producto-detalle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';//incluir
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProductoComponent } from './Components/producto/producto.component';
import {TestModule} from "./test/test.module";
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { ResaltadoDirective } from './resaltado.directive';
import { ConcatenarPruebaPipe } from './concatenar-prueba.pipe'
import { InterceptorsService } from './interceptors.service';
import { ProductosAltaComponent } from './Pages/productos-alta/productos-alta.component';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { FileUploadModule } from 'ng2-file-upload';
import { ProductosListadoComponent } from './Pages/productos-listado/productos-listado.component';//Incluir
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    ProductoDetalleComponent,
    ProductoComponent,
    ContactoComponent,
    ResaltadoDirective,
    ConcatenarPruebaPipe,
    ProductosAltaComponent,
    ProductosListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //incluir
    ReactiveFormsModule, //Incluir
    HttpClientModule, 
    TestModule,
    NgxDatatableModule,//Incluir
    FileUploadModule,//Incluir
    MatIconModule,
    BrowserAnimationsModule,MatButtonModule,MatMenuModule,MatFormFieldModule,MatInputModule,MatSnackBarModule,MatSelectModule,MatChipsModule //incluir
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorsService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
