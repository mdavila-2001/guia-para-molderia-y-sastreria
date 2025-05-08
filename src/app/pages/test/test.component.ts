import { Component, OnInit } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { HttpClient } from '@angular/common/http';
import { TipComponent } from "../../components/tip/tip.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TableComponent, TipComponent],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/measures.json').subscribe(res => {
      this.data = res;
    });
  }
}