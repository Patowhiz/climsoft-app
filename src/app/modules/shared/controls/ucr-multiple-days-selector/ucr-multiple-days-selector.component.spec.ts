import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrMultipleDaysSelectorComponent } from './ucr-multiple-days-selector.component';

describe('UcrMultipleDaysSelectorComponent', () => {
  let component: UcrMultipleDaysSelectorComponent;
  let fixture: ComponentFixture<UcrMultipleDaysSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrMultipleDaysSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcrMultipleDaysSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
