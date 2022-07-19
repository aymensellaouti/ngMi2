import { Action, createReducer, on } from '@ngrx/store';
import { Cv } from '../model/cv';
import * as CvActions from './../cv-action.actions';

export const cvFeatureKey = 'cv';

export interface CvState {
  cvList: Cv[];
  selectedCv: Cv | null;
  loading: boolean;
}

export const initialState: CvState = {
  cvList: [],
  selectedCv: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(CvActions.loadCvActions, (state) => {
    console.log('in LoadCv Action : ', state);
    return {
      ...state,
      loading: true,
    };
  }),
  on(CvActions.loadCvActionsSuccess, (state, payload) => {
    console.log('payload', payload);

    /*     console.log('in LoadCv Action Success : ', state, payload.cvs); */
    return {
      ...state,
      loading: false,
      cvList: payload.cvs,
    };
  }),
  on(CvActions.loadCvActionsFailure, (state) => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(CvActions.loadCvByIdActionsSuccess, (state, { cv }) => {
    console.log('payload in loadCvByIdActionsSuccess', cv);
    /*     console.log('in LoadCv Action Success : ', state, payload.cvs); */
    return {
      ...state,
      loading: false,
      selectedCv: cv,
    };
  })
);
