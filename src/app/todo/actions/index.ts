import { addTodoAction, deleteTodoAction } from './todo.action';

export const enum TodoActionsEnum {
  'ADD_TODO' = '[TODO] Add Todo',
  'DELETE_TODO' = '[TODO] Delete Todo',
}

export const TodoActions = {
  ADD_TODO: addTodoAction,
  DELETE_TODO: deleteTodoAction,
};
