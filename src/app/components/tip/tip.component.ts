import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tip',
  standalone: true,
  imports: [],
  templateUrl: './tip.component.html',
  styleUrl: './tip.component.css'
})
export class TipComponent {
  @Input() title: string = '';
  @Input() content: string = '';
}
