import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  two = 'init content';
  constructor() {}

  ngOnInit(): void {}
  changeTwoValue() {
    this.two = 'une nouvelle valeur';
  }
}
