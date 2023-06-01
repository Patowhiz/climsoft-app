import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

import { Station } from '../../models/station.model';

export const STATIONSLIST: Station[] = [
  { id: "1", name: 'Kisumu' },
  { id: "2", name: 'Kericho' },
  { id: "3", name: 'Eldoret' },
  { id: "4", name: 'Nairobi' }
];

@Component({
  selector: 'app-ucr-single-station-selector',
  templateUrl: './ucr-single-station-selector.component.html',
  styleUrls: ['./ucr-single-station-selector.component.scss']
})
export class UcrSingleStationSelectorComponent implements OnInit, OnChanges {
  @Input() selectedStation!: Station;
  @Input() stationIdsFilter!: string[];
  @Output() selectionChange = new EventEmitter<Station>();
  stations: Station[];

  constructor() {
    //todo. load from the server
    this.stations = STATIONSLIST;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.stationIdsFilter && this.stationIdsFilter.length > 0) {
      let newStations: Station[] = [];
      this.stations.forEach(element => {
        if (this.stationIdsFilter.includes(element.id)) {
          newStations.push(element);
        }
      });

      this.stations = newStations;

    }
  }

  ngOnInit(): void {
    //if no station is selected then select the first station by default
    if (this.stations.length > 0 && !this.selectedStation) {
      this.onChange(this.stations[0]);
    }
  }

  onChange(change: any) {
    this.selectedStation = change;
    this.selectionChange.emit(change);
  }


}
