import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcrTableComponent } from './ucr-table.component';

describe('UcrTableComponent', () => {
  let component: UcrTableComponent;
  let fixture: ComponentFixture<UcrTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcrTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
