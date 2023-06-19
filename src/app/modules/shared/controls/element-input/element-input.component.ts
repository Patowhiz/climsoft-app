import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Element } from '../../models/element.model';
import { RepoService } from '../../services/repo.service';

@Component({
  selector: 'app-element-input',
  templateUrl: './element-input.component.html',
  styleUrls: ['./element-input.component.scss']
})
export class ElementInputComponent   implements OnInit, OnChanges {
  @Input() filter!: number[];
  @Input() value!: any;
  @Output() valueChange = new EventEmitter<any>();
  elements: Element[];


  constructor(private repo: RepoService) {
    this.elements = this.repo.getAllElements();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
 
  }

  onChange(change: any) {
    this.valueChange.emit(change);
  }

}
