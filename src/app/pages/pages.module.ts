import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
