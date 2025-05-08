import { Component, OnInit } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { HttpClient } from '@angular/common/http';
import { TipComponent } from "../../components/tip/tip.component";
import { DescCardComponent } from "../../components/desc-card/desc-card.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TableComponent, TipComponent],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: any[] = [];

  // Ejemplos de desc-card
  cardExample1 = {
    title: 'Ejemplo Básico',
    description: 'Esta es una tarjeta descriptiva básica que muestra el uso del componente con texto simple.',
    accentColor: '#536C4B'
  };

  cardExample2 = {
    title: 'Ejemplo con Imagen',
    description: 'Esta tarjeta muestra cómo se ve el componente cuando incluye una imagen.',
    imageUrl: 'assets/images/example.jpg',
    details: 'Detalles adicionales que aparecen debajo de la descripción principal',
    accentColor: '#8B4513'
  };

  cardExample3 = {
    title: 'Ejemplo con Lista',
    isList: true,
    items: [
      'Primer elemento de la lista',
      'Segundo elemento con más detalles',
      'Tercer elemento para demostración'
    ],
    accentColor: '#2E5090'
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/measures.json').subscribe(res => {
      this.data = res;
    });
  }
}