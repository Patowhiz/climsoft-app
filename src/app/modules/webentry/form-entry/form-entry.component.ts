import { Component, OnInit } from '@angular/core';
import { ENTRYDATASAMPLE, HOURSLIST } from '../mockdata/mockdata-list.mock';
import { Router } from '@angular/router';
import { Station } from '../../shared/models/station.model';
import { EntryForm } from '../../shared/models/entryform.model';
import { EntryData } from '../../shared/models/entrydata.model';
import { RepoService } from '../../shared/services/repo.service';
import { Element } from '../../shared/models/element.model';
import { ViewsDataService } from '../../shared/services/views-data.service';


@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.scss']
})
export class FormEntryComponent implements OnInit {
  station!: Station;
  entryForm!: EntryForm;
  entryDataItems: EntryData[] = [];
  useDatePickerControl: boolean = false;


  constructor(private viewDataService: ViewsDataService, private repo: RepoService, private router: Router) {

    this.station = this.viewDataService.getViewNavigationData()['stationData'];
    this.entryForm = this.viewDataService.getViewNavigationData()['formData'];


   this. useDatePickerControl = this.entryForm.entrySelectors.includes('year') && 
   this.entryForm.entrySelectors.includes('month') && this.entryForm.entrySelectors.includes('day');
  
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

  public onElementChange(element: Element): void {
    //console.log("form entry element changed", element);
  }

  public onYearChange(year: any): void {
    //console.log("form entry year changed", year);

  }

  public onMonthChange(month: any): void {
    //console.log("form entry onth changed", month);

  }

  public onDayChange(day: number): void {
    //console.log("dform entry ay changed", day);

  }

  public onHourChange(hour: number): void {
    //console.log("form entry hour changed", hour);

  }

  public onGridChange(): void {
    //console.log("form entry hour changed", hour);

  }

  public onSave(): void {
    console.log("new values", this.entryDataItems)

  }

  public onDelete(): void {

  }

  public onClear(): void {

  }
}
