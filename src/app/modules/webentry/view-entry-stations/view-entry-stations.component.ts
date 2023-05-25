import { Component, OnInit } from '@angular/core';
import { ViewportService, ViewPortSize } from '../../shared/services/viewport.service';
import { RepoService } from '../../shared/services/repo.service';
import { Station } from '../../shared/models/station.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-entry-stations',
  templateUrl: './view-entry-stations.component.html',
  styleUrls: ['./view-entry-stations.component.scss']
})
export class ViewEntryStationsComponent implements OnInit {

  mobileView: boolean = false;
  displayedColumns: string[] = ['id', 'name'];
  stations!: Station[];

  constructor(private viewPort: ViewportService, private repo: RepoService, private router: Router) {
    this.viewPort.viewPortSize.subscribe((viewPortSize) => {
      this.mobileView = (viewPortSize === ViewPortSize.Small)
    });

    this.stations = [
      { id: '1', name: 'JKIA Airport' },
      { id: '2', name: 'KMD Headquarters' },
      { id: '3', name: 'ICPAC Main' },
      { id: '4', name: 'KALRO Machakos' }];

  }

  ngOnInit(): void {
  }

  public onStationClick(station: Station) {
    this.router.navigate(
      ['dataentry', 'forms'],
      {
        state: {
          viewTitle: 'Entry Forms', subView: true, stationData: station
        }
      });
  }

}
