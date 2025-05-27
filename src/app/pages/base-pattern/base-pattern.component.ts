import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseRectanglesComponent, RectangleDimensions } from '../../components/base-rectangles/base-rectangles.component';
import { TableComponent, TableConfig } from '../../components/table/table.component';
import { TipComponent } from '../../components/tip/tip.component';

@Component({
  selector: 'app-base-pattern',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    BaseRectanglesComponent,
    TableComponent,
    TipComponent
  ],
  templateUrl: './base-pattern.component.html',
  styleUrls: ['./base-pattern.component.css']
})
export class BasePatternComponent {
  // Dimensiones para los rectángulos
  frontRectangle: RectangleDimensions = {
    width: 180,
    height: 300,
    verticalMeasure: '43cm',
    horizontalMeasure: '23cm',
    label: 'Delantero'
  };

  backRectangle: RectangleDimensions = {
    width: 180,
    height: 290,
    verticalMeasure: '41cm',
    horizontalMeasure: '23cm',
    label: 'Trasero'
  };

  // Configuración de la tabla
  tableConfig: TableConfig = {
    columns: [
      { key: 'medida', header: 'Medida', sortable: true },
      { key: 'valor', header: 'Valor', sortable: true },
      { key: 'tipo', header: 'Tipo', sortable: true }
    ],
    showHeader: true,
    rowSelectable: false,
    pagination: false
  };

  // Datos de ejemplo para la tabla
  measurementsData = [
    { medida: 'Contorno de pecho', valor: '88cm', tipo: 'Básica' },
    { medida: 'Contorno de cintura', valor: '70cm', tipo: 'Básica' },
    { medida: 'Contorno de cadera', valor: '96cm', tipo: 'Básica' },
    { medida: 'Largo de espalda', valor: '42cm', tipo: 'Básica' },
    { medida: 'Ancho de espalda', valor: '36cm', tipo: 'Básica' },
    { medida: 'Largo de talle', valor: '43cm', tipo: 'Básica' },
    { medida: 'Largo de manga', valor: '58cm', tipo: 'Básica' },
    { medida: 'Contorno de brazo', valor: '28cm', tipo: 'Básica' }
  ];

  // Instrucciones para crear el molde base
  instructions = [
    'Toma todas las medidas necesarias según la tabla de arriba.',
    'Sobre el papel de patronaje, traza un rectángulo con las medidas de ancho y largo del delantero.',
    'Marca la línea de escote, hombros, sisa y costados según las medidas tomadas.',
    'Repite el proceso para la parte trasera, ajustando las medidas según corresponda.',
    'Añade los márgenes de costura (generalmente 1-1.5cm).',
    'Corta las piezas y márcalas correctamente.'
  ];
}
