import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipComponent } from './tip.component';

describe('TipComponent', () => {
  let component: TipComponent;
  let fixture: ComponentFixture<TipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
