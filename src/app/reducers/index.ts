import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { todoReducer, TodoState } from '../todo/reducers/todo.reducer';

export interface State {
  todo: TodoState;
}

export const reducers: ActionReducerMap<State> = {
  todo: todoReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
