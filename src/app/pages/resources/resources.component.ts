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
    title: 'Básicas',
    isList: true,
    items: [
      'Cinta métrica profesional',
      'Reglas de patronaje',
      'Tijeras de tela y papel',
      'Alfileres y agujas',
      'Tiza de sastre'
    ],
    accentColor: '#536C4B'
  };

  advanced = {
    title: 'Avanzadas',
    isList: true,
    items: [
      'Ruleta y papel de calco',
      'Pesas para patrones',
      'Plancha industrial',
      'Mesa de corte profesional'
    ],
    accentColor: '#536C4B'
  };

  books = {
    title: 'Libros Recomendados',
    isList: true,
    items: [
      'Patronaje: las bases',
      'Manual de técnicas de sastrería',
      'Guía completa de acabados',
      'Confección de alta costura'
    ],
    accentColor: '#536C4B'
  };

  online = {
    title: 'Recursos online',
    isList: true,
    items: [
      'Tutoriales en video',
      'Blogs especializados',
      'Foros de consulta',
      'Cursos virtuales'
    ],
    accentColor: '#536C4B'
  };

  cloth = {
    title: 'Telas y Materiales',
    isList: true,
    items: [
      'Tiendas especializadas',
      'Distribuidores mayoristas',
      'Mercerías de calidad',
      'Importadores téxtiles'
    ],
    accentColor: '#536C4B'
  };

  tools = {
    title: 'Herramientas y Equipos',
    isList: true,
    items: [
      'Tiendas de máquinas',
      'Suministros profesionales',
      'Accesorios especializados',
      'Repuestos y mantenimiento'
    ],
    accentColor: '#536C4B'
  }
}
