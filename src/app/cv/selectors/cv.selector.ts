import { createSelector } from '@ngrx/store';
import { State } from '../../reducers/index';
import * as fromCvReducer from '../reducers/cv.reducer';

export const cvStateSelector = (state: State) => state.cv;
export const allCvsSelector = createSelector(
  cvStateSelector,
  fromCvReducer.cvSelectors.selectAll
);
export const selectIdsCvs = createSelector(
  cvStateSelector,
  fromCvReducer.cvSelectors.selectIds
);
export const selectEntitiesCvs = createSelector(
  cvStateSelector,
  fromCvReducer.cvSelectors.selectEntities
);
export const selectTotalCv = createSelector(
  cvStateSelector,
  fromCvReducer.cvSelectors.selectTotal
);
export const detailCvSelector = createSelector(
  cvStateSelector,
  (state: fromCvReducer.CvState) => state.selectedCv
);
