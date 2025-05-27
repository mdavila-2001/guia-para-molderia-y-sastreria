import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TableComponent } from "../../components/table/table.component";
import { TipComponent } from "../../components/tip/tip.component";
import { DescCardComponent } from "../../components/desc-card/desc-card.component";
import { BaseRectangleComponent, RectangleMeasurement } from "../../components/base-rectangle/base-rectangle.component";

interface MoldExample {
  title: string;
  type: 'delantero' | 'trasero' | 'manga' | 'falda' | 'pantalon';
  measurements: RectangleMeasurement[];
  description: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    TableComponent, 
    TipComponent, 
    BaseRectangleComponent,
    //DescCardComponent
  ],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: any[] = [];
  moldExamples: MoldExample[] = [
    {
      title: 'Delantero',
      type: 'delantero',
      description: 'Molde delantero con medidas estándar',
      measurements: [
        { value: 43, position: 'top', label: 'Largo', showArrow: true },
        { value: 23, position: 'right', label: 'Ancho', showArrow: true }
      ]
    },
    {
      title: 'Trasero',
      type: 'trasero',
      description: 'Molde trasero con ajuste',
      measurements: [
        { value: 41, position: 'top', label: 'Largo', showArrow: true },
        { value: 23, position: 'right', label: 'Ancho', showArrow: true }
      ]
    },
    {
      title: 'Manga Larga',
      type: 'manga',
      description: 'Manga larga con ajuste en puño',
      measurements: [
        { value: 55, position: 'left', label: 'Largo' },
        { value: 25, position: 'top', label: 'Ancho' },
        { value: 20, position: 'bottom', label: 'Puño' }
      ]
    },
    {
      title: 'Falda Recta',
      type: 'falda',
      description: 'Falda recta con abertura',
      measurements: [
        { value: 60, position: 'left', label: 'Largo' },
        { value: 45, position: 'top', label: 'Cintura' },
        { value: 50, position: 'bottom', label: 'Bajo' }
      ]
    },
    {
      title: 'Pantalón Clásico',
      type: 'pantalon',
      description: 'Pantalón clásico con pinzas',
      measurements: [
        { value: 100, position: 'left', label: 'Largo' },
        { value: 45, position: 'top', label: 'Cintura' },
        { value: 25, position: 'right', label: 'Rodilla' },
        { value: 22, position: 'bottom', label: 'Bajo' }
      ]
    }
  ];

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