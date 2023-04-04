import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef } from '@angular/core';

import { EntryForm } from '../models/entryform.model';
import { EntryData } from '../models/entrydata.model';
import { DAYSLIST, ENTRYDATASAMPLE, HOURSLIST } from '../mockdata/mockdata-list.mock';
import { ActivatedRoute, Router } from '@angular/router';
import { RepoService } from '../services/repo.service';
import { Station } from '../models/station.model';
import { Element } from '../models/element.model';

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.scss']
})
export class FormEntryComponent implements OnInit, AfterViewInit {
   entryForm!: EntryForm;
   entryDataItems: EntryData[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private repo: RepoService, private componentFactoryResolver: ComponentFactoryResolver) {
    let formId = this.route.snapshot.paramMap.get("formid");
    //check for valid form id
    if (formId === null || !Number(formId)) {
      this.router.navigate(['/webentry/viewforms'])
      return;
    }

    //todo. will be a subscription and also check for valid form
    this.entryForm = this.repo.getEntryForm(Number(formId));

     //todo. push it to the entry control level
     this.entryForm.hours = [];
     HOURSLIST.forEach(element => {
       this.entryForm.hours.push(element);
     });

    //get the data based on the selectors and fields
    //todo. this data will later come from the server
    this.entryDataItems = ENTRYDATASAMPLE;


  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  public onStationChange(station: Station) {
    console.log("form entry station changed", station);

  }

  public onElementChange(element: Element): void {
    console.log("form entry element changed", element);

  }

  public onYearChange(year: any): void {
    console.log("form entry year changed", year);

  }

  public onMonthChange(month: any): void {
    console.log("form entry onth changed", month);

  }

  public onDayChange(day: number): void {
    console.log("dform entry ay changed", day);

  }

  public onHourChange(hour: number): void {
    console.log("form entry hour changed", hour);

  }

  public onGridChange(): void {
    //console.log("form entry hour changed", hour);

  }
  public onSave(): void {
    //console.log("form entry hour changed", hour);

  }


}
