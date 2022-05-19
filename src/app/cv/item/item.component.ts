import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv | null = null;
  @Input() size = 50;
  @Output() selectCv = new EventEmitter<Cv>();
  constructor() {}

  ngOnInit(): void {}
  selectCvClick() {
    /*
      Envoyer un event qui contient le cv
    */
    if (this.cv) this.selectCv.emit(this.cv);
  }
}
