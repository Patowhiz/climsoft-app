import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { EntryForm } from '../models/entryform.model';
import { EntryDataSource } from '../models/entrydatasource.model';

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


}
