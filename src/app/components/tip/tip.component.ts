import { Component, Input, AfterContentInit, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tip.component.html',
  styleUrl: './tip.component.css'
})
export class TipComponent implements AfterContentInit {
  @Input() title: string = '';
  @Input() content: string = '';

  hasCustomContent = false;

  @ContentChild('customContent') customContent: any;

  ngAfterContentInit() {
    // Verificar si hay contenido proyectado
    this.hasCustomContent = !!this.customContent;
  }
}
