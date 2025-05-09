import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnChanges {
  @Input() datos: any[] = [];
  columnas: string[] = [];

  @ContentChild('headerTemplate') headerTemplate?: TemplateRef<any>;
  @ContentChild('cellTemplate') cellTemplate?: TemplateRef<any>;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.datos.length > 0) {
      this.columnas = Object.keys(this.datos[0]);
    }
  }
}
