import { Component } from '@angular/core';
import { DescCardComponent } from '../../components/desc-card/desc-card.component';
import { TipComponent } from '../../components/tip/tip.component';

@Component({
  selector: 'app-skills',
  imports: [DescCardComponent, TipComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  costurasUniones = {
    title: 'Costuras y Uniones',
    isList: true,
    items: [
      'Costura francesa para telas finas',
      'Costura inglesa para acabados limpios',
      'Costura plana para tejidos gruesos',
      'Uniones invisibles a mano',
      'Costuras curvas y esquinas',
      'Unión de telas con diferentes pesos'
    ],
    accentColor: '#536C4B'
  };

  acabadosProfesionales = {
    title: 'Acabados Profesionales',
    isList: true,
    items: [
      'Dobladillos invisibles a mano',
      'Dobladillos con puntada ciega',
      'Ribetes en diferentes anchos',
      'Vivos simples y dobles',
      'Ojales manuales decorativos',
      'Botones forrados artesanales',
      'Presillas y trabillas',
      'Pespuntes decorativos'
    ],
    accentColor: '#536C4B'
  };

  tecnicasPlanchado = {
    title: 'Técnicas de Planchado',
    isList: true,
    items: [
      'Planchado de costuras rectas',
      'Planchado de costuras curvas',
      'Moldeado con vapor en mangas',
      'Moldeado de solapas y cuellos',
      'Fusionado de entretelas',
      'Técnicas de presión y temperatura',
      'Planchado final de prendas'
    ],
    accentColor: '#536C4B'
  };

  detallesOrnamentacion = {
    title: 'Detalles y Ornamentación',
    isList: true,
    items: [
      'Aplicación de encajes',
      'Bordados básicos decorativos',
      'Colocación de pedrería',
      'Aplicaciones y parches',
      'Drapeados simples',
      'Plisados y tablas',
      'Volantes y olanes'
    ],
    accentColor: '#536C4B'
  };
}
