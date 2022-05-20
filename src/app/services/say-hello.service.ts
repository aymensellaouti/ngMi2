import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class SayHelloService {
  constructor(private loggerService: LoggerService, private http: HttpClient) {}
  hello() {
    this.loggerService.loggerCeQueTuVeux('Hello :D :D');
  }

  getTest() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  getByIdTest(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/' + id);
  }
  postTest() {
    const newTodo = {
      userId: 1,
      title: 'todo jdid',
      completed: false,
    };
    return this.http.post(
      'https://jsonplaceholder.typicode.com/todos',
      newTodo
    );
  }
}
