import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrSingleMonthSelectorComponent } from './ucr-single-month-selector.component';

describe('UcrSingleMonthSelectorComponent', () => {
  let component: UcrSingleMonthSelectorComponent;
  let fixture: ComponentFixture<UcrSingleMonthSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrSingleMonthSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcrSingleMonthSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
