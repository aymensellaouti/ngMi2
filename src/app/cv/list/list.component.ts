import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() cvs: Cv[] = [];
  @Output() forwardCv = new EventEmitter<Cv>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.cvs);
  }
  forwardSelectedCv(cv: Cv) {
    /*
      J'envoi un envent avec le cv que je viens de recevoir
    */
    this.forwardCv.emit(cv);
  }
}
