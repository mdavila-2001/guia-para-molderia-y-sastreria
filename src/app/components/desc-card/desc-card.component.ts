import { Component, Input, ContentChild, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-desc-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desc-card.component.html',
  styleUrl: './desc-card.component.css'
})
export class DescCardComponent implements AfterContentInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() details: string = '';
  @Input() isList: boolean = false;
  @Input() items: string[] = [];
  @Input() accentColor: string = '#007bff';

  hasCustomContent = false;

  @ContentChild('customContent') customContent: any;

  ngAfterContentInit() {
    // Verificar si hay contenido proyectado
    this.hasCustomContent = !!this.customContent;
  }
}
