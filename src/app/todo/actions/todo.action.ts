import { createAction, props } from "@ngrx/store";
import { TodoActionsEnum } from ".";
import { Todo } from './../model/todo';

export const addTodoAction = createAction(
    TodoActionsEnum.ADD_TODO,
    props<{ todo: Todo }>()
);
export const deleteTodoAction = createAction(
    TodoActionsEnum.DELETE_TODO,
    props<{ todo: Todo }>()
);
