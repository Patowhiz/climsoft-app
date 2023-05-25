import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrMultipleElementsSelectorComponent } from './ucr-multiple-elements-selector.component';

describe('UcrMultipleElementsSelectorComponent', () => {
  let component: UcrMultipleElementsSelectorComponent;
  let fixture: ComponentFixture<UcrMultipleElementsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrMultipleElementsSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcrMultipleElementsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
