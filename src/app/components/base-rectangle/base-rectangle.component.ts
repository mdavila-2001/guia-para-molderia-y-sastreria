import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type RectangleType = 'delantero' | 'trasero' | 'manga' | 'falda' | 'pantalon';
type ArrowPosition = 'top' | 'right' | 'bottom' | 'left';

export interface RectangleMeasurement {
  value: number;
  position: ArrowPosition;
  showArrow?: boolean;
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
  @Input() type: RectangleType = 'delantero';
  @Input() title: string = '';
  @Input() measurements: RectangleMeasurement[] = [];
  @Input() unit: string = 'cm';

  getMeasurement(position: ArrowPosition): RectangleMeasurement | undefined {
    return this.measurements.find(m => m.position === position);
  }
}
