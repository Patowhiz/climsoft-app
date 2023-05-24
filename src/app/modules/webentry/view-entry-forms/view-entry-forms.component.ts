import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntryForm } from '../models/entryform.model';
import { RepoService } from '../services/repo.service';
import { ViewportService, ViewPortSize } from '../../shared/services/viewport.service';

@Component({
  selector: 'app-view-entry-forms',
  templateUrl: './view-entry-forms.component.html',
  styleUrls: ['./view-entry-forms.component.scss']
})
export class ViewEntryFormsComponent implements OnInit {

  mobileView: boolean = false;
  displayedColumns: string[] = ['name', 'description','actions'];
  entryForms: EntryForm[];

  constructor(private viewPort: ViewportService, repo: RepoService, private router: Router) {
    this.viewPort.viewPortSize.subscribe((viewPortSize) => {
      this.mobileView = (viewPortSize === ViewPortSize.Small)
    });

    //todo. forms shown here should be for the selected station only
    this.entryForms = repo.getEntryForms();
  }

  ngOnInit(): void {
  }

  public onFormClick(entryForm: any) {
    this.router.navigate(
      ['dataentry', 'formentry', entryForm.id],
      { state: { title: entryForm.name, subComponent: true } });
  }


}
