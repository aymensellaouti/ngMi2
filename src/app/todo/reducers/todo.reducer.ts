import { createReducer, on } from '@ngrx/store';
import { TodoActions } from '../actions/index';
import { Todo } from './../model/todo';
import { addInArray, deleteFromArray } from '../../helpers/array-immutable-function.helper.ts';

export interface TodoState {
  todos: Todo[];
}
const initialState: TodoState = {
  todos: [],
};
export const todoReducer = createReducer(
  initialState,
  on(TodoActions.ADD_TODO, ({ todos }, { todo }) => {
    /* console.log('todo', todo);
    const newTodos = [...todos, todo];
    console.log('newTodos', newTodos); */
    return { todos: addInArray(todos, todo) };
  }),
  on(TodoActions.DELETE_TODO, ({ todos }, { todo }) => {
    /*     const newTodos = todos.filter((actualtodo) => todo != actualtodo);
       console.log('new Todos after delete :', newTodos);
    */
    return { todos: deleteFromArray(todos, todo) };
  })
);
