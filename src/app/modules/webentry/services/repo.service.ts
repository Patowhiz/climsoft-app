import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { EntryData } from '../models/entrydata.model';
import { EntryForm } from '../models/entryform.model';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(public localStorage: LocalstorageService) { }

  public saveEntryForm(entryForm: EntryForm): boolean {
    let entryForms: EntryForm[] = this.getEntryForms();
    //set unique form id
    if (entryForms.length > 0) {
      entryForm.id = entryForms[entryForms.length - 1].id + 1
    } else {
      entryForm.id = 1;
    }

    entryForms.push(entryForm);
    this.localStorage.setItem("entry_forms", JSON.stringify(entryForms));
    return true;
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


}
