import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  @Input() name = 'aymen';
  isHidden = true;
  buttonName = 'show';
  age = '';
  constructor() {}

  ngOnInit(): void {
/*     setTimeout(() => {
      this.name = 'yosri';
    }, 3000); */
    /*     setInterval(() => {
      this.isHidden = !this.isHidden;
    }, 2000); */
  }
  changeAge(newValue: string) {
    this.age = newValue;
  }
  showHide() {
    this.isHidden = !this.isHidden;
    this.buttonName == 'show'
      ? (this.buttonName = 'hide')
      : (this.buttonName = 'show');
  }
}
