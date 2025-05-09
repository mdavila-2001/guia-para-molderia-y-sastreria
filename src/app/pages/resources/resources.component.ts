import { Component } from '@angular/core';
import { DescCardComponent } from '../../components/desc-card/desc-card.component';

@Component({
  selector: 'app-resources',
  imports: [DescCardComponent],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {
  basics = {
    title: 'Ejemplo con Lista',
    isList: true,
    items: [
      'Cinta métrica profesional',
      'Reglas de patronaje',
      'Tijeras de tela y papel',
      'Alfileres y agujas'
    ],
    accentColor: '#2E5090'
  };
}
