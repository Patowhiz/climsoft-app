import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrSingleDaySelectorComponent } from './ucr-single-day-selector.component';

describe('UcrSingleDaySelectorComponent', () => {
  let component: UcrSingleDaySelectorComponent;
  let fixture: ComponentFixture<UcrSingleDaySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrSingleDaySelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcrSingleDaySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
