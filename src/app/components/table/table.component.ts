import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnChanges{
  @Input() datos: any[] = [];
  columnas: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.datos.length > 0) {
      this.columnas = Object.keys(this.datos[0]);
    }
  }
}
