import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, ContentChild, TemplateRef } from '@angular/core';

// Define interfaces at the top level
export interface TableRowData {
  [key: string]: any;
}

export interface TableColumn {
  key: string;
  header: string;
  width?: string;
  sortable?: boolean;
  template?: TemplateRef<any>;
}

export interface TableConfig {
  columns: TableColumn[];
  showHeader?: boolean;
  rowSelectable?: boolean;
  pagination?: boolean;
  pageSize?: number;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent<T extends TableRowData = TableRowData> implements OnChanges {
  @Input() data: T[] = [];
  @Input() config?: TableConfig;
  
  columns: string[] = [];
  loading: boolean = false;
  error: string | null = null;

  @ContentChild('headerTemplate') headerTemplate?: TemplateRef<{ $implicit: string }>;
  @ContentChild('cellTemplate') cellTemplate?: TemplateRef<{ $implicit: any, row: T, column: string }>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('data' in changes) {
      this.handleDataChange(changes['data']);
    }
  }

  private handleDataChange(change: { currentValue: T[] }): void {
    if (!change || !change.currentValue) {
      this.error = 'No se proporcionaron datos';
      return;
    }

    const currentData = change.currentValue;
    
    if (!Array.isArray(currentData)) {
      this.error = 'Los datos deben ser un arreglo';
      return;
    }

    if (this.config?.columns?.length) {
      // Si hay configuración de columnas, usamos esas claves
      this.columns = this.config.columns.map(col => col.key);
    } else if (currentData.length > 0) {
      // Si no hay configuración, inferimos las columnas del primer objeto
      const firstItem = currentData[0];
      this.columns = Object.keys(firstItem as object);
    } else {
      this.columns = [];
    }
    
    this.error = null;
  }

  trackByIndex(index: number): number {
    return index;
  }

  // Helper method to safely access row data
  getRowValue(row: T, column: string): any {
    return row[column as keyof T];
  }
}
