import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';
import { CvService } from '../services/cv.service';
import { Store } from '@ngrx/store';
import { CvState } from '../reducers/cv.reducer';
import * as fromCvActions from './../cv-action.actions';
import { State } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { allCvsSelector } from '../selectors/cv.selector';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  /*   cvs: Cv[] = [];
   */
  selectedCv: Cv | null = null;
  date = new Date();
  cvs$: Observable<Cv[]>;
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private store: Store<State>
  ) {
    this.store.dispatch(fromCvActions.loadCvActions());
    this.cvs$ = this.store.select(allCvsSelector);
  }
  ngOnInit(): void {
    this.loggerService.loggerCeQueTuVeux('Mar7ba :D');
    this.sayHelloService.hello();
    this.store.subscribe((state) => {
      console.log('state in store : ', state);
    });
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
