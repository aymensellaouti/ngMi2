import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';
import { CvService } from '../services/cv.service';

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
    private sayHelloService: SayHelloService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.loggerService.loggerCeQueTuVeux('Mar7ba :D');
    this.sayHelloService.hello();
    this.cvs = this.cvService.getCvs();
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
