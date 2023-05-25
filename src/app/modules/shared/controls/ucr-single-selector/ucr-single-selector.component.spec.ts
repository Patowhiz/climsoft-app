import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrSingleSelectorComponent } from './ucr-single-selector.component';

describe('UcrSingleSelectorComponent', () => {
  let component: UcrSingleSelectorComponent;
  let fixture: ComponentFixture<UcrSingleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrSingleSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcrSingleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
