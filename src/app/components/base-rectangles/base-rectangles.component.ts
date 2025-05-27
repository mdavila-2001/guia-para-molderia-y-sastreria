import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface RectangleDimensions {
  width: number;
  height: number;
  verticalMeasure: string;
  horizontalMeasure: string;
  label: string;
}

@Component({
  selector: 'app-base-rectangles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-rectangles.component.html',
  styleUrls: ['./base-rectangles.component.css']
})
export class BaseRectanglesComponent {
  @Input() rectangle: RectangleDimensions = { 
    width: 180, 
    height: 300, 
    verticalMeasure: '43cm',
    horizontalMeasure: '23cm',
    label: 'Rectángulo'
  };
}
