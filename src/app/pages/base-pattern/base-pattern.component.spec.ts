import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePatternComponent } from './base-pattern.component';

describe('BasePatternComponent', () => {
  let component: BasePatternComponent;
  let fixture: ComponentFixture<BasePatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasePatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
