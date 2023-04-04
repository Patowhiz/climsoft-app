import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntryForm } from '../models/entryform.model';
import { RepoService } from '../services/repo.service';



@Component({
  selector: 'app-view-entry-forms',
  templateUrl: './view-entry-forms.component.html',
  styleUrls: ['./view-entry-forms.component.css']
})
export class ViewEntryFormsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource: EntryForm[];

  constructor(repo: RepoService, private router: Router) {
    this.dataSource = repo.getEntryForms();
  }

  ngOnInit(): void {
  }


  public onFormClick(row: any) {
    this.router.navigate(['/webentry/formentry',row.id]);
  }


}
