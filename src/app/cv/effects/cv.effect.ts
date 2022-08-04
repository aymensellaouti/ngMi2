import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as fromCvActions from './../cv-action.actions';
import { CvService } from '../services/cv.service';
import { EMPTY } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable()
export class CvEffects {
  constructor(
    private actions$: Actions,
    private cvService: CvService,
    private toaster: ToastrService,
    private router: Router
  ) {}
  loadCvs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCvActions.cvActionsTypes.LOAD_CV),
      mergeMap(() => {
        console.log(' here in effects');
        return this.cvService.getApiCvs().pipe(
          map((cvs) => ({
            type: fromCvActions.cvActionsTypes.LOAD_CV_SUCCESS,
            cvs: cvs,
          }))
          /* catchError(() => EMPTY) */
        );
      })
    )
  );
  loadCvById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCvActions.cvActionsTypes.LOAD_CV_By_ID),
      mergeMap(({ id }) => {
        console.log(' here in effects loadCvById', id);
        return this.cvService.findCvByIdApi(id).pipe(
          map((cv) => ({
            type: fromCvActions.cvActionsTypes.LOAD_CV_By_ID_SUCCESS,
            cv: cv,
          })),
          catchError(() => {
            this.toaster.error('Cv Not found');
            this.router.navigate(['cv']);
            return EMPTY;
          })
        );
      })
    )
  );
  /*   loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Movies Page] Load Movies'),
    mergeMap(() => this.moviesService.getAll()
      .pipe(
        map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
        catchError(() => EMPTY)
      ))
    )
  ); */

  /*   loadCvs$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromCvActions.cvActionsTypes.LOAD_CV),
      mergeMap(
        () => this.csService.getApiCvs().pipe(
          map((cvs) => {type: fromCvActions.loadCvActionsSuccess, payload: cvs})
      ))
    )
  ); */
}
