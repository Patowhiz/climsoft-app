import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ViewportService, ViewPortSize } from '../../shared/services/viewport.service';
import { RepoService } from '../../shared/services/repo.service';
import { Station } from '../../shared/models/station.model';
import { EntryForm } from '../../shared/models/entryform.model';
import { ViewsDataService } from '../../shared/services/views-data.service';

@Component({
  selector: 'app-view-entry-forms',
  templateUrl: './view-entry-forms.component.html',
  styleUrls: ['./view-entry-forms.component.css']
})
export class ViewEntryFormsComponent implements OnInit {

  mobileView: boolean = false;
  displayedColumns: string[] = ['name', 'description'];
  station!: Station;
  entryForms!: EntryForm[];

  constructor(private viewPortService: ViewportService,
    private viewDataService: ViewsDataService,
    private repo: RepoService,
    private router: Router) {

    this.viewPortService.viewPortSize.subscribe((viewPortSize) => {
      this.mobileView = (viewPortSize === ViewPortSize.Small)
    });

    this.station = this.viewDataService.getViewNavigationData()['stationData'];
  
    //todo. forms shown here should be for the selected station only
    this.entryForms = this.repo.getEntryForms();


  }

ngOnInit(): void {
}

  //todo. temporary
  public getDataSourceName(dataSourceId: number): string {
  return this.repo.getDataSource(dataSourceId).name;
}

  //todo. temporary
  public getDataSourceDescription(dataSourceId: number): string {
  return this.repo.getDataSource(dataSourceId).description;
}

  public onFormClick(entryForm: any) {

  this.router.navigate(
    ['dataentry', 'formentry', entryForm.id],
    { state: { viewTitle: "Enter Data", subView: true, stationData: this.station, formData: entryForm } });
}


}
