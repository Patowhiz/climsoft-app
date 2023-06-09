import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { EntryForm } from '../models/entryform.model';
import { EntryDataSource } from '../models/entrydatasource.model';
import { EntryData } from '../models/entrydata.model';
import { ENTRYDATASAMPLE } from '../../dataentry/mockdata/mockdata-list.mock';
import { EntrySelectorsValues } from '../../dataentry/form-entry/form-entry.component';
import { Element } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(public localStorage: LocalStorageService) { }

  public saveEntryForm(formName: string, formDescription: string, entryForm: EntryForm): boolean {

    let dataSource: EntryDataSource = { id: 0, name: formName, description: formDescription };
    this.saveDataSource(dataSource);

    let entryForms: EntryForm[] = this.getEntryForms();
    //let entryForms: EntryForm[] = [];

    //set unique form id
    if (entryForms.length > 0) {
      entryForm.id = entryForms[entryForms.length - 1].id + 1
    } else {
      entryForm.id = 1;
    }

    entryForm.dataSourceId = dataSource.id;

    entryForms.push(entryForm);
    this.localStorage.setItem("entry_forms", JSON.stringify(entryForms));
    return true;
  }

  private saveDataSource(dataSource: EntryDataSource): boolean {
    let dataSources: EntryDataSource[] = this.getDataSources();

    //let dataSources: EntryDataSource[] =[];

    //set unique form id
    if (dataSources.length > 0) {
      dataSource.id = dataSources[dataSources.length - 1].id + 1
    } else {
      dataSource.id = 1;
    }

    dataSources.push(dataSource);
    this.localStorage.setItem("data_sources", JSON.stringify(dataSources));
    return true;

  }

  private getDataSources(): EntryDataSource[] {
    let dataSources: EntryDataSource[] = []
    let str: any = this.localStorage.getItem("data_sources");
    if (str) {
      dataSources = JSON.parse(str)
    }
    return dataSources;
  }

  public getEntryForms(): EntryForm[] {
    let entryForms: EntryForm[] = []
    let str: any = this.localStorage.getItem("entry_forms");
    if (str) {
      entryForms = JSON.parse(str)
    }
    return entryForms;
  }

  public getEntryForm(id: number): EntryForm {
    let entryForm!: EntryForm;
    let entryForms: EntryForm[] = this.getEntryForms();
    entryForms.forEach(element => {
      if (element.id === id) {
        entryForm = element;
        return;
      }
    });

    return entryForm;
  }

  public getDataSource(id: number): EntryDataSource {
    let dataSource!: EntryDataSource;
    let dataSources: EntryDataSource[] = this.getDataSources();
    dataSources.forEach(element => {
      if (element.id === id) {
        dataSource = element;
        return;
      }
    });

    return dataSource;
  }


  

  public getEntryDataItems(stationdId: string, dataSourceId: number, entrySelectorValues: EntrySelectorsValues): EntryData[] {

    let entryDataItems: EntryData[] = [];

    //todo. the below filter will happen at the server level
    for (const entryData of ENTRYDATASAMPLE) {

      if (entryData.stationId !== stationdId) {
        continue;
      }

      if (entryData.dataSourceId !== dataSourceId) {
        continue;
      }

      if (entrySelectorValues.elementId > 0 && entryData.elementId !== entrySelectorValues.elementId) {
        continue;
      }

      if (entrySelectorValues.year > 0 && entryData.year !== entrySelectorValues.year) {
        continue;
      }

      if (entrySelectorValues.month > 0 && entryData.month !== entrySelectorValues.month) {
        continue;
      }

      if (entrySelectorValues.day > 0 && entryData.day !== entrySelectorValues.day) {
        continue;
      }

      if (entrySelectorValues.hour > -1 && entryData.hour !== entrySelectorValues.hour) {
        continue;
      }

      entryDataItems.push(entryData);

    }

    return entryDataItems;

  }

  private getSavedEntryDataItems(): EntryData[] {
    let entryDataItems: EntryData[] = []
    let str: any = this.localStorage.getItem("entry_data_items");
    if (str) {
      entryDataItems = JSON.parse(str)
    }
    return entryDataItems;
  }

  public saveEntryData(entryData: EntryData[]): boolean {
    //todo. this will also be done at the server level
    let entryDataItems: EntryData[] = this.getSavedEntryDataItems();
    //let entryDataItems: EntryDataSource[] =[];

    //todo. check for uniqueness from the local data as well
    entryDataItems.push(...entryData);
    this.localStorage.setItem("entry_data_items", JSON.stringify(entryDataItems));
    return true;

  }

  public getAllElements(): Element[] {
    return [
      { id: 1, name: 'Minimum Temperature' },
      { id: 2, name: 'Maximum Temperature' },
      { id: 3, name: 'Rainfall' },
      { id: 4, name: 'Humidity' }
    ];
  }


}
