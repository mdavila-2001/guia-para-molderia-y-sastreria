import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type RectangleType = 'default' | 'delantero' | 'trasero' | 'manga' | 'falda' | 'pantalon';
type ArrowPosition = 'top' | 'right' | 'bottom' | 'left';

export interface RectangleMeasurement {
  value: number;
  position: ArrowPosition;
  showArrow?: boolean;
  offsetX?: string;
  offsetY?: string;
  label?: string;
}

@Component({
  selector: 'app-base-rectangle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-rectangle.component.html',
  styleUrls: ['./base-rectangle.component.css']
})
export class BaseRectangleComponent {
  @Input() type: RectangleType = 'default';
  @Input() title: string = '';
  @Input() measurements: RectangleMeasurement[] = [];
  @Input() unit: string = 'cm';

  getTransform(position: ArrowPosition): string {
    switch(position) {
      case 'top':
      case 'bottom':
        return 'translateX(-50%)';
      case 'left':
      case 'right':
        return 'translateY(-50%)';
      default:
        return '';
    }
  }
}
