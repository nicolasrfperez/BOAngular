import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './prueba/prueba.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms' //Incluir


@NgModule({
  declarations: [PruebaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[PruebaComponent]
})
export class TestModule { }
