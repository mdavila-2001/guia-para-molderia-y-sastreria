import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableComponent, TableConfig, TableRowData } from "../../components/table/table.component";
import { TipComponent } from "../../components/tip/tip.component";
import { FormsModule } from '@angular/forms';


// Define interface for table data
interface MeasurementRow extends TableRowData {
  medida: string;
  valor: string;
  tipo: string;
}

// Interfaz para las medidas de los moldes
export interface RectangleMeasurement {
  value: number;
  position: 'top' | 'right' | 'bottom' | 'left';
  label: string;
  showArrow?: boolean;
}

interface BaseRectangle {
  width: number;
  height: number;
  label: string;
  type: string;
}

interface MeasuredRectangle extends BaseRectangle {
  verticalMeasure: string;
  horizontalMeasure: string;
  type: 'basic';
}

interface NeckRectangle extends BaseRectangle {
  points: Array<{
    type: string;
    position: { x: number; y: number };
  }>;
  lines: Array<{
    type: string;
    start: { x: number; y: number };
    end: { x: number; y: number };
  }>;
  measures: Array<{
    type: string;
    value: string;
  }>;
  type: 'neck';
}

interface RectangleVersion {
  title: string;
  rectangles: Array<MeasuredRectangle | NeckRectangle>;
}

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
HttpClientModule,
    FormsModule
  ],
  schemas: [],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  rectangleVersions: RectangleVersion[] = [
    {
      title: 'Rectángulos Base',
      rectangles: [
        {
          width: 180,
          height: 300,
          verticalMeasure: '43cm',
          horizontalMeasure: '23cm',
          label: 'Delantero',
          type: 'basic'
        },
        {
          width: 180,
          height: 290,
          verticalMeasure: '41cm',
          horizontalMeasure: '23cm',
          label: 'Trasero',
          type: 'basic'
        }
      ]
    },
    {
      title: 'Cuello y Caída de Hombro',
      rectangles: [
        {
          width: 180,
          height: 300,
          points: [
            { type: 'green', position: { x: 20, y: 20 } },
            { type: 'purple', position: { x: 60, y: 20 } },
            { type: 'red', position: { x: 40, y: 50 } }
          ],
          lines: [
            { type: 'green', start: { x: 20, y: 20 }, end: { x: 20, y: 80 } },
            { type: 'purple', start: { x: 60, y: 20 }, end: { x: 60, y: 80 } },
            { type: 'red', start: { x: 40, y: 50 }, end: { x: 100, y: 50 } }
          ],
          measures: [
            { type: 'purple', value: '6cm' },
            { type: 'red', value: '5cm' },
            { type: 'green', value: '8cm' }
          ],
          label: 'Delantero',
          type: 'neck'
        },
        {
          width: 180,
          height: 290,
          points: [
            { type: 'blood', position: { x: 30, y: 30 } },
            { type: 'blue', position: { x: 70, y: 30 } }
          ],
          lines: [
            { type: 'blue', start: { x: 70, y: 30 }, end: { x: 70, y: 90 } },
            { type: 'blood', start: { x: 30, y: 30 }, end: { x: 90, y: 30 } }
          ],
          measures: [
            { type: 'blood', value: '2cm' },
            { type: 'blue', value: '7cm' }
          ],
          label: 'Trasero',
          type: 'neck'
        }
      ]
    }
  ];

  currentVersionIndex = 0;

  get currentVersion() {
    return this.rectangleVersions[this.currentVersionIndex];
  }

  // Table configuration
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

  // Table data
  data: MeasurementRow[] = [
    { medida: 'Largo', valor: '43cm', tipo: 'Delantero' },
    { medida: 'Ancho', valor: '23cm', tipo: 'Delantero' },
    { medida: 'Largo', valor: '45cm', tipo: 'Trasero' },
    { medida: 'Ancho', valor: '24cm', tipo: 'Trasero' }
  ];

  // Ejemplos de moldes
  moldExamples: MoldExample[] = [
    {
      title: 'Molde Básico',
      type: 'delantero',
      description: 'Molde básico para prenda delantera',
      measurements: [
        { value: 43, position: 'bottom', label: 'Largo' },
        { value: 23, position: 'right', label: 'Ancho' }
      ]
    },
    {
      title: 'Molde Trasero',
      type: 'trasero',
      description: 'Molde básico para prenda trasera',
      measurements: [
        { value: 45, position: 'bottom', label: 'Largo' },
        { value: 24, position: 'right', label: 'Ancho' }
      ]
    },
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