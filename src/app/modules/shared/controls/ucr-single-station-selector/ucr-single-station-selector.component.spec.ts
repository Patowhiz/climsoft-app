import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrSingleStationSelectorComponent } from './ucr-single-station-selector.component';

describe('UcrSingleStationSelectorComponent', () => {
  let component: UcrSingleStationSelectorComponent;
  let fixture: ComponentFixture<UcrSingleStationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrSingleStationSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcrSingleStationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
