import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ampoule',
  templateUrl: './ampoule.component.html',
  styleUrls: ['./ampoule.component.css'],
})
export class AmpouleComponent implements OnInit {
  isAllume = true;
  isDefectueuse = false;
  constructor() {}

  ngOnInit(): void {}
  interupteur() {
    this.isAllume = !this.isAllume;
  }
  abimer() {
    this.isDefectueuse = true;
  }
}
