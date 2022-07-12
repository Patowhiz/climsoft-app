import { Injectable } from '@angular/core';
import { HttpService } from '@shared/services/http.service';
import { Observable, BehaviorSubject } from 'rxjs';

import { FormDailyPayload, DailyState } from '@data/interface/data-entry-daily-payload';
import { SynopticState } from '@data/interface/data-entry-synoptic-payload';
import * as moment from 'moment';

const apiPrefix = `climsoft/v1`;

@Injectable({
  providedIn: 'root'
})
export class DataEntryService {

  dailyState$: BehaviorSubject<DailyState | boolean> = new BehaviorSubject<DailyState | boolean>(false);
  synopticState$: BehaviorSubject<SynopticState | boolean> = new BehaviorSubject<SynopticState | boolean>(false);

  constructor(private http: HttpService) { }

  get dailyState(): Observable<any> {
    return this.dailyState$.asObservable();
  }

  getDailyEntry(station: string | any, element: string | any, year: number, month: number, hour: number): Observable<any> {
    // return this.http.GET(`${apiPrefix}/form_daily2s/${station}/${element}/${year}/${month}/${hour}`);
    this.updateDailyState({ station, element, monthYear: `${month}-1-${year}`, hour });
    return this.http.GET(`${apiPrefix}/form_daily2s?station_id=${station}&element_id=${element}&yyyy=${year}&mm=${month}&hh=${hour}&limit=25&offset=0`);
  }

  addDailyEntry(payload: FormDailyPayload) {
    return this.http.POST(`${apiPrefix}/form_daily2s`, payload);
  }

  updateDailyEntry(station: string | any, element: string | any, year: number, month: number, hour: number, payload: FormDailyPayload) {
    return this.http.PUT(`${apiPrefix}/form_daily2s/${station}/${element}/${year}/${month}/${hour}`, payload);
  }

  updateDailyState(newVal: DailyState) {
    this.dailyState$.next(newVal);
  }

  resetDailyState() {
    this.dailyState$.next(false);
  }

  getSynopticEntry(station: string | any, year: number, month: number, day: number, hour: number) {
    this.synopticState$.next({ station, year, month, day, hour })
    const url = `${apiPrefix}/synop-features?station_id=${station}&yy=${year}&mm=${month}&dd=${day}&hh=${hour}`;
    return this.http.GET(url);
  }

  updateSynopticState(station: string | any, year: number, month: number, day: number, hour: number) {
    this.synopticState$.next({ station, year, month, day, hour })
  }
}
