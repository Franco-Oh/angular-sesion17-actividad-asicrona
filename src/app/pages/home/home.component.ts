import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lista = [
    {
      codigo: 1,
      descripcion: "Galletas Chokis",
      compra: 10,
      venta: 15,
      ganancia: 5,
      existencia: 100
    },
    {
      codigo: 2,
      descripcion: "Mermelada de fresa",
      compra: 65,
      venta: 80,
      ganancia: 15,
      existencia: 100
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
