import { createSelector } from '@ngrx/store';
import { State } from '../../reducers/index';
import { CvState } from '../reducers/cv.reducer';

export const cvStateSelector = (state: State) => state.cv;
export const allCvsSelector = createSelector(
  cvStateSelector,
  (state: CvState) => state.cvList
);
export const detailCvSelector = createSelector(
  cvStateSelector,
  (state: CvState) => state.selectedCv
);
