import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrSingleElementsSelectorComponent } from './ucr-single-elements-selector.component';

describe('UcrSingleElementsSelectorComponent', () => {
  let component: UcrSingleElementsSelectorComponent;
  let fixture: ComponentFixture<UcrSingleElementsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrSingleElementsSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcrSingleElementsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
