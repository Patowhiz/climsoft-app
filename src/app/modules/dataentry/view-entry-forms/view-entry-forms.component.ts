import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ViewportService, ViewPortSize } from '../../shared/services/viewport.service';
import { RepoService } from '../../shared/services/repo.service';
import { Station } from '../../shared/models/station.model';
import { EntryForm } from '../../shared/models/entryform.model';
import { ViewsDataService } from '../../shared/services/views-data.service';
import { EntryDataSource } from '../../shared/models/entrydatasource.model';
import { DataClicked } from '../../shared/controls/data-list-view/data-list-view.component';

@Component({
  selector: 'app-view-entry-forms',
  templateUrl: './view-entry-forms.component.html',
  styleUrls: ['./view-entry-forms.component.scss']
})
export class ViewEntryFormsComponent implements OnInit {

  station!: Station;
  entrydataSources: EntryDataSource[];

  constructor(private viewPortService: ViewportService,
    private viewDataService: ViewsDataService,
    private repo: RepoService,
    private router: Router) {



    this.station = this.viewDataService.getViewNavigationData()['stationData'];

    //todo. get forms  be for the selected station only
    this.entrydataSources = this.repo.getDataSources(1);

  }

  ngOnInit(): void {
  }



  public onFormClick(dataClicked: DataClicked) {

    this.router.navigate(
      ['dataentry', 'formentry'],
      { state: { viewTitle: dataClicked.dataSourceItem['name'] + " Data Entry", subView: true, stationData: this.station, dataSourceData: dataClicked.dataSourceItem } });
  }


}
