import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeModeComponent } from './range-mode.component';

describe('RangeModeComponent', () => {
  let component: RangeModeComponent;
  let fixture: ComponentFixture<RangeModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
