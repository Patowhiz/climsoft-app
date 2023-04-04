import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrMultipleSelectorComponent } from './ucr-multiple-selector.component';

describe('UcrMultipleSelectorComponent', () => {
  let component: UcrMultipleSelectorComponent;
  let fixture: ComponentFixture<UcrMultipleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrMultipleSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcrMultipleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
