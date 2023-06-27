import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntryForm } from '../../shared/models/entryform.model';
import { RepoService } from '../../shared/services/repo.service';
import { EntryDataSource } from '../../shared/models/entrydatasource.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  entryDataSources: EntryDataSource[] = [];

  constructor(private repo: RepoService, private router: Router) {
    //get data sources of  acquisition type forms
    this.entryDataSources = this.repo.getDataSources(1);
  }

  ngOnInit(): void {
  }

  onNewForm() {
    this.router.navigate(
      ['metadata', 'formbuilder'],
      { state: { viewTitle: "New Form", subView: true } });
  }

  onEditForm(dataSource: EntryDataSource) {
    this.router.navigate(
      ['metadata', 'formbuilder'],
      { state: { viewTitle: "Edit Form", subView: true, dataSourceData: dataSource } });
  }

  onDeleteForm(dataSource: EntryDataSource): void {
    //todo. prompt for confirmation first
    this.repo.deleteDataSource(dataSource.id);

    //refresh
    this.entryDataSources = this.repo.getDataSources(1);
  }


}
