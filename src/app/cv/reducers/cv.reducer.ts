import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Cv } from '../model/cv';
import * as CvActions from './../cv-action.actions';

export const cvFeatureKey = 'cv';

export interface CvState extends EntityState<Cv> {
  selectedCv: Cv | null;
  loading: boolean;
}

export const cvAdapter: EntityAdapter<Cv> = createEntityAdapter<Cv>({});

export const cvSelectors = cvAdapter.getSelectors();

export const initialState: CvState = cvAdapter.getInitialState({
  selectedCv: null,
  loading: false,
});
console.log('inital State : ', initialState);

export const reducer = createReducer(
  initialState,
  on(CvActions.loadCvActions, (state) => {
    console.log('in LoadCv Action : ', state);
    /*  state.cvList = []; */
    /*     return state; */
    return {
      ...state,
      loading: true,
    };
  }),
  on(CvActions.loadCvActionsSuccess, (state, payload) => {
    console.log('payload', payload);
    const newState = {
      ...cvAdapter.setAll(payload.cvs, state),
      loading: false,
    };
    console.log('New State in loadCvActionsSuccess', newState);

    /*     console.log('in LoadCv Action Success : ', state, payload.cvs); */
    return newState;
    /*     return {
      ...state,
      loading: false,
      cvList: payload.cvs,
    };
 */
  }),
  on(CvActions.loadCvActionsFailure, (state) => {
    /*     this.
    this.router.navigate(['cv']); */
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
