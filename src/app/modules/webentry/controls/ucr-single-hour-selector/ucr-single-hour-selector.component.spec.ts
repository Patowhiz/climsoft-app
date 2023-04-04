import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrSingleHourSelectorComponent } from './ucr-single-hour-selector.component';

describe('UcrSingleHourSelectorComponent', () => {
  let component: UcrSingleHourSelectorComponent;
  let fixture: ComponentFixture<UcrSingleHourSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrSingleHourSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcrSingleHourSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
