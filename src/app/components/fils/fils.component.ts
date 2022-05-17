import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  /*
    1 Créer Event
  */
  @Output() sendDataToSon = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  emitSonEvent(data: string) {
    this.sendDataToSon.emit(data);
  }

}
