import { createAction, props } from '@ngrx/store';
import { Cv } from './model/cv';

export enum cvActionsTypes {
  'LOAD_CV' = '[CvAction] Load Cvs Actions',
  'LOAD_CV_SUCCESS' = '[CvAction] Load Cvs Actions Success',
  'LOAD_CV_FAILURE' = '[CvAction] Load Cvs Actions Failure',
  'LOAD_CV_By_ID' = '[DetailCv] Load Cv By Id Actions',
  'LOAD_CV_By_ID_SUCCESS' = '[DetailCv] Load Cv By Id Actions Success',
  'LOAD_CV_By_ID_FAILURE' = '[DetailCv]  Load Cv By Id Actions Failure',
}

export const loadCvActions = createAction(cvActionsTypes.LOAD_CV);

export const loadCvByIdActions = createAction(
  cvActionsTypes.LOAD_CV_By_ID,
  props<{ id: number }>()
);

export const loadCvActionsSuccess = createAction(
  cvActionsTypes.LOAD_CV_SUCCESS,
  props<{ cvs: Cv[] }>()
);
export const loadCvByIdActionsSuccess = createAction(
  cvActionsTypes.LOAD_CV_By_ID_SUCCESS,
  props<{ cv: Cv }>()
);

export const loadCvActionsFailure = createAction(
  cvActionsTypes.LOAD_CV_By_ID_FAILURE,
  props<{ error: any }>()
);
