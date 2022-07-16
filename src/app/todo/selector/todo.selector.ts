import { createSelector } from "@ngrx/store";
import { State } from '../../reducers/index';
import { TodoState } from './../reducers/todo.reducer';

export const todoStateSelector = (state: State) => state.todo;
export const allTodoSelector = createSelector(
  todoStateSelector,
  (state: TodoState) => state.todos
);