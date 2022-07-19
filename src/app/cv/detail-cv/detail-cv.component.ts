import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { MES_ROUTES } from '../../../config/router';
import { Store } from '@ngrx/store';
import { CvState } from '../reducers/cv.reducer';
import * as fromCvActions from './../cv-action.actions';
import { detailCvSelector } from '../selectors/cv.selector';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      /*  this.cv = this.cvService.findCvById(params.id);
      if (!this.cv) this.router.navigate([MES_ROUTES.cv]); */
      this.store.dispatch(fromCvActions.loadCvByIdActions({ id: params.id }));
    });
    this.store.select(detailCvSelector).subscribe((cv) => (this.cv = cv));
  }
  delete() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
      this.router.navigate([MES_ROUTES.cv]);
    }
  }
}
