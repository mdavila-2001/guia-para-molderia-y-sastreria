import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BaseRectangleComponent, RectangleMeasurement } from './base-rectangle.component';

describe('BaseRectangleComponent', () => {
  let component: BaseRectangleComponent;
  let fixture: ComponentFixture<BaseRectangleComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseRectangleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseRectangleComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el título cuando se proporciona', () => {
    component.title = 'Mi Rectángulo';
    fixture.detectChanges();
    const titleElement = element.querySelector('.title');
    expect(titleElement?.textContent).toContain('Mi Rectángulo');
  });

  it('debería aplicar la clase CSS correcta según el tipo', () => {
    component.type = 'delantero';
    fixture.detectChanges();
    const rectElement = element.querySelector('.rectangle');
    expect(rectElement?.classList.contains('delantero')).toBeTrue();
  });

  it('debería mostrar las medidas correctamente', () => {
    const testMeasurements: RectangleMeasurement[] = [
      { value: 50, position: 'top', label: 'Ancho' },
      { value: 100, position: 'left', label: 'Largo' }
    ];
    
    component.measurements = testMeasurements;
    fixture.detectChanges();
    
    const measureElements = element.querySelectorAll('.measure');
    expect(measureElements.length).toBe(2);
    expect(measureElements[0].textContent).toContain('50cm');
    expect(measureElements[1].textContent).toContain('100cm');
  });

  it('debería permitir personalizar la unidad de medida', () => {
    component.unit = 'in';
    component.measurements = [{ value: 10, position: 'top' }];
    fixture.detectChanges();
    
    const measureElement = element.querySelector('.measure');
    expect(measureElement?.textContent).toContain('10in');
  });

  it('debería aplicar la transformación correcta según la posición', () => {
    const testCases = [
      { position: 'top', expected: 'translateX(-50%)' },
      { position: 'bottom', expected: 'translateX(-50%)' },
      { position: 'left', expected: 'translateY(-50%)' },
      { position: 'right', expected: 'translateY(-50%)' }
    ];

    testCases.forEach(testCase => {
      component.measurements = [{ value: 10, position: testCase.position as any }];
      fixture.detectChanges();
      
      const measureElement = element.querySelector('.measure');
      const transform = measureElement?.getAttribute('style')?.includes(testCase.expected);
      expect(transform).toBeTrue();
    });
  });
});
