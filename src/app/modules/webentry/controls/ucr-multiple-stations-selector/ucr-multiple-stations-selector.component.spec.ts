import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrMultipleStationsSelectorComponent } from './ucr-multiple-stations-selector.component';

describe('UcrMultipleStationsSelectorComponent', () => {
  let component: UcrMultipleStationsSelectorComponent;
  let fixture: ComponentFixture<UcrMultipleStationsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrMultipleStationsSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcrMultipleStationsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
