import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebEntryBaseComponent } from './web-entry-base.component';

describe('WebEntryBaseComponent', () => {
  let component: WebEntryBaseComponent;
  let fixture: ComponentFixture<WebEntryBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebEntryBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebEntryBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
