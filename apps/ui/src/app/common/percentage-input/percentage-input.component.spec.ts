import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageInputComponent } from './percentage-input.component';

describe('PercentageInputComponent', () => {
  let component: PercentageInputComponent;
  let fixture: ComponentFixture<PercentageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
