import { Component, OnInit } from '@angular/core';
import { DescCardComponent } from '../../components/desc-card/desc-card.component';
import { TableComponent } from '../../components/table/table.component';
import { HttpClient } from '@angular/common/http';
import { TipComponent } from "../../components/tip/tip.component";

@Component({
  selector: 'app-fundamentals',
  standalone: true,
  imports: [DescCardComponent, TableComponent, TipComponent],
  templateUrl: './fundamentals.component.html',
  styleUrl: './fundamentals.component.css'
})
export class FundamentalsComponent implements OnInit{
  data: any[] = [];

  basicTools = {
    title: 'Herramientas Básicas',
    isList: true,
    items: [
      'Cinta métrica',
      'Papel para patrones',
      'Tijeras de tela y papel',
      'Alfileres y agujas',
      'Tiza de sastre'
    ],
    accentColor: '#536C4B'
  };

  measurements = {
    title: 'Medidas',
    description: 'Para realizar el molde de cuerpo base, es necesario tomar las siguientes medidas:',
    accentColor: '#536C4B'
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/measures.json').subscribe(res => {
      this.data = res;
    });
  }
}
