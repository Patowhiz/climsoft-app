import { Injectable } from '@angular/core';
import { HttpService } from '@shared/services/http.service';
import { Observable, BehaviorSubject } from 'rxjs';

import { HourlyPayload, HourlyState } from '@data/interface/data-entry-hourly-payload';
import { MonthlyPayload, MonthlyState } from '@data/interface/data-entry-monthly-payload';
import { FormDailyPayload, DailyState } from '@data/interface/data-entry-daily-payload';
import { SynopticState } from '@data/interface/data-entry-synoptic-payload';
import {  HourlyWindPayload, HourlyWindState } from '@data/interface/data-entry-hourly-wind-payload';

const apiPrefix = `climsoft/v1`;
const hourlyUrl = `${apiPrefix}/form_hourlys`;
const hourlyWindsUrl = `${apiPrefix}/form_hourlywinds`;
const dailyUrl = `${apiPrefix}/form_daily2s`;
const monthlyUrl = `${apiPrefix}/form_monthlys`;
const synopticTdcfUrl = `${apiPrefix}/form_synoptic2_tdcfs`;
const synopticRa1fUrl = `${apiPrefix}/form_synoptic_2_ra1s`;

@Injectable({
  providedIn: 'root'
})
export class DataEntryService {

  hourlyState$: BehaviorSubject<HourlyState | boolean> = new BehaviorSubject<HourlyState | boolean>(false);
  hourlyWindState$: BehaviorSubject<HourlyWindState | boolean> = new BehaviorSubject<HourlyWindState | boolean>(false);
  dailyState$: BehaviorSubject<DailyState | boolean> = new BehaviorSubject<DailyState | boolean>(false);
  monthlyState$: BehaviorSubject<MonthlyState | boolean> = new BehaviorSubject<MonthlyState | boolean>(false);
  synopticState$: BehaviorSubject<SynopticState | boolean> = new BehaviorSubject<SynopticState | boolean>(false);

  constructor(private http: HttpService) { }

  get dailyState(): Observable<any> {
    return this.dailyState$.asObservable();
  }

  get hourlyState(): Observable<any> {
    return this.hourlyState$.asObservable();
  }

  get hourlyWindState(): Observable<any> {
    return this.hourlyWindState$.asObservable();
  }

  get monthlyState(): Observable<any> {
    return this.monthlyState$.asObservable();
  }

  getDailyEntry(station: string | any, element: string | any, year: number, month: number, hour: number): Observable<any> {
    this.updateDailyState({ station, element, monthYear: `${month}-1-${year}`, hour });
    return this.http.GET(`${dailyUrl}?station_id=${station}&element_id=${element}&yyyy=${year}&mm=${month}&hh=${hour}&limit=25&offset=0`);
  }

  addDailyEntry(payload: FormDailyPayload) {
    return this.http.POST(`${dailyUrl}`, payload);
  }

  updateDailyEntry(station: string | any, element: string | any, year: number, month: number, hour: number, payload: FormDailyPayload) {
    return this.http.PUT(`${dailyUrl}/${station}/${element}/${year}/${month}/${hour}`, payload);
  }

  updateDailyState(newVal: DailyState) {
    this.dailyState$.next(newVal);
  }

  resetDailyState() {
    this.dailyState$.next(false);
  }

  /**
   *  Hourly Data
   */
  getHourlyEntry(station: string | any, element: string | any, year: number, month: number, day: number): Observable<any> {
    this.updateHourlyState({ station, element, date: new Date(`${month}-${day}-${year}`).toISOString() });
    return this.http.GET(`${hourlyUrl}?station_id=${station}&element_id=${element}&yyyy=${year}&mm=${month}&dd=${day}&limit=25&offset=0`);
  }

  addHourlyEntry(payload: HourlyPayload) {
    return this.http.POST(`${hourlyUrl}`, payload);
  }

  updateHourlyEntry(station: string | any, element: string | any, year: number, month: number, day: number, payload: HourlyPayload) {
    return this.http.PUT(`${hourlyUrl}/${station}/${element}/${year}/${month}/${day}`, payload);
  }

  updateHourlyState(newVal: HourlyState) {
    this.hourlyState$.next(newVal);
  }

  resetHourlyState() {
    this.hourlyState$.next(false);
  }

  /**
   *  Hourly Wind Data
   */

  elementLookup(code: number) {
    return this.http.GET(`${apiPrefix}/obselements/${code}`);
  }

  getHourlyWindEntry(station: string | any, year: number, month: number, day: number): Observable<any> {
    this.updateHourlyWindState({ station, date: new Date(`${month}-${day}-${year}`).toISOString() });
    return this.http.GET(`${hourlyWindsUrl}?station_id=${station}&yyyy=${year}&mm=${month}&dd=${day}&limit=25&offset=0`);
  }

  addHourlyWindEntry(payload: HourlyWindPayload) {
    return this.http.POST(`${hourlyWindsUrl}`, payload);
  }

  updateHourlyWindEntry(station: string | any, year: number, month: number, day: number, payload: HourlyWindPayload) {
    return this.http.PUT(`${hourlyWindsUrl}/${station}/${year}/${month}/${day}`, payload);
  }

  updateHourlyWindState(newVal: HourlyWindState) {
    this.hourlyWindState$.next(newVal);
  }

  resetHourlyWindState() {
    this.hourlyWindState$.next(false);
  }

  /**
   *  Monthly Data
   */
  getMonthlyEntry(station: string | any, element: string | any, year: number): Observable<any> {
    this.updateMonthlyState({ station, element, year: new Date(`1-1-${year}`).toISOString() });
    return this.http.GET(`${monthlyUrl}?station_id=${station}&element_id=${element}&yyyy=${year}&limit=25&offset=0`);
  }

  addMonthlyEntry(payload: MonthlyPayload) {
    return this.http.POST(`${monthlyUrl}`, payload);
  }

  updateMonthlyEntry(station: string | any, element: string | any, year: number, payload: MonthlyPayload) {
    return this.http.PUT(`${monthlyUrl}/${station}/${element}/${year}`, payload);
  }

  updateMonthlyState(newVal: MonthlyState) {
    this.monthlyState$.next(newVal);
  }

  resetMonthlyState() {
    this.monthlyState$.next(false);
  }


  /**
   *  Synoptic Data
   */
  getSynopticEntry(station: string | any, year: number, month: number, day: number, hour: number) {
    this.synopticState$.next({ station, year, month, day, hour })
    const url = `${apiPrefix}/synop-features?station_id=${station}&yy=${year}&mm=${month}&dd=${day}&hh=${hour}`;
    return this.http.GET(url);
  }

  updateSynopticState(station: string | any, year: number, month: number, day: number, hour: number) {
    this.synopticState$.next({ station, year, month, day, hour })
  }
}
