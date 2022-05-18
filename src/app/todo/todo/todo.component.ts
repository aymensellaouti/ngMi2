import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todo =  new Todo();
  constructor(
    private todoService: TodoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.toastr.info('Bonjour dans votre gestionnaire de Todo :)');
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

}
