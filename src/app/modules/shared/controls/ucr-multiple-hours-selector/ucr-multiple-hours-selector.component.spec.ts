import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrMultipleHoursSelectorComponent } from './ucr-multiple-hours-selector.component';

describe('UcrMultipleHoursSelectorComponent', () => {
  let component: UcrMultipleHoursSelectorComponent;
  let fixture: ComponentFixture<UcrMultipleHoursSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrMultipleHoursSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcrMultipleHoursSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
