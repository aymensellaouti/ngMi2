import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  date = new Date();
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService
  ) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', '', '123', 39),
      new Cv(
        2,
        'sellaouti',
        'skander',
        'bebe',
        '                         ',
        '123',
        3
      ),
      new Cv(
        3,
        'sellaouti',
        'skander',
        'bebe',
        'rotating_card_profile3.png',
        '123',
        3
      ),
    ];
  }

  ngOnInit(): void {
    this.loggerService.loggerCeQueTuVeux('Mar7ba :D');
    this.sayHelloService.hello();
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
