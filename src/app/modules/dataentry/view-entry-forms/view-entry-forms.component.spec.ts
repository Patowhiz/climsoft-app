import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEntryFormsComponent } from './view-entry-forms.component';

describe('ViewEntryFormsComponent', () => {
  let component: ViewEntryFormsComponent;
  let fixture: ComponentFixture<ViewEntryFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEntryFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEntryFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
