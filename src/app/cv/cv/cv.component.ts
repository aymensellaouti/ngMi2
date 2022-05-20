import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  nb = 0;
  /*   selectedCv: Cv | null = null; */
  date = new Date();
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private cvService: CvService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loggerService.loggerCeQueTuVeux('Mar7ba :D');
    this.sayHelloService.hello();
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: (e) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.warning(
          'Problème avec le serveur, les données sont fakes, veuillez contacter l admin'
        );
      },
    });
    this.cvService.selectCvObservable$
      .pipe(distinctUntilChanged())
      .subscribe(() => {
        this.nb++;
      });
  }
  /*   getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  } */
}
