import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  color = 'blue';
  bgc = 'green';
  font = '100px';
  constructor() { }

  ngOnInit(): void {
  }

}
