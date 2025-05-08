import { Component, OnInit } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/tallas_por_medidas.json').subscribe(res => {
      this.data = res;
    });
  }
}