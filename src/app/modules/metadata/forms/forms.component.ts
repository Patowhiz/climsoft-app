import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntryForm } from '../../shared/models/entryform.model';
import { RepoService } from '../../shared/services/repo.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description'];
  entryForms: EntryForm[];

  constructor( private repo: RepoService, private router: Router) { 
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
    console.log("edit form clicked");
    //todo
    
    // this.router.navigate(
    //   ['forms', 'formbuilder', entryForm.id],
    //   { state: { title: entryForm.name, subComponent: true } });
  }

}
