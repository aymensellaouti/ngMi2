import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { TodoState } from '../reducers/todo.reducer';
import { TodoActions } from '../actions/index';
import { Observable } from 'rxjs';
import { State } from '../../reducers/index';
import { map } from 'rxjs/operators';
import { allTodoSelector } from '../selector/todo.selector';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todos$: Observable<Todo[]>;
  todo = new Todo();
  constructor(
    private todoService: TodoService,
    private toastr: ToastrService,
    private store: Store<State>
  ) {
    /* this.todos$ = this.store.pipe(map((state) => state.todo.todos)); */
    this.todos$ = this.store.select(allTodoSelector);
  }
  ngOnInit(): void {
    /* this.todos = this.todoService.getTodos(); */
    this.store.subscribe((data) => console.log('data', data));
    this.toastr.info('Bonjour dans votre gestionnaire de Todo :)');
  }
  addTodo() {
    /* this.todoService.addTodo(this.todo); */
    this.store.dispatch(TodoActions.ADD_TODO({ todo: this.todo }));
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.store.dispatch(TodoActions.DELETE_TODO({ todo: todo }));
  }
}
