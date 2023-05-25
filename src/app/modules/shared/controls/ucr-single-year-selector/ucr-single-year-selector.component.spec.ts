import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrSingleYearSelectorComponent } from './ucr-single-year-selector.component';

describe('UcrSingleYearSelectorComponent', () => {
  let component: UcrSingleYearSelectorComponent;
  let fixture: ComponentFixture<UcrSingleYearSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrSingleYearSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcrSingleYearSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
