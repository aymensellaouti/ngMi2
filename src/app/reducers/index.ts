import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { todoReducer, TodoState } from '../todo/reducers/todo.reducer';
import * as fromCv from '../cv/reducers/cv.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { reducer } from '../cv/reducers/cv.reducer';

export interface State {
  todo: TodoState;
  [fromCv.cvFeatureKey]: fromCv.CvState;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  todo: todoReducer,
  [fromCv.cvFeatureKey]: fromCv.reducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
