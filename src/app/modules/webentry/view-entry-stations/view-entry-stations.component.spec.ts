import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEntryStationsComponent } from './view-entry-stations.component';

describe('ViewEntryStationsComponent', () => {
  let component: ViewEntryStationsComponent;
  let fixture: ComponentFixture<ViewEntryStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEntryStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEntryStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
