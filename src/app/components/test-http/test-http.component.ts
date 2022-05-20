import { Component, OnInit } from '@angular/core';
import { SayHelloService } from 'src/app/services/say-hello.service';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css'],
})
export class TestHttpComponent implements OnInit {
  constructor(private sayHello: SayHelloService) {}

  ngOnInit(): void {
    this.sayHello.postTest().subscribe({
      next: (todo) => {
        console.log(todo);
      },
      error: (e) => {
        console.log('fama ghalta', e);
      },
      complete: () => {
        console.log('oufa');
      },
    });
    this.sayHello.getByIdTest(220).subscribe({
      next: (todo) => {
        console.log(todo);
      },
      error: (e) => {
        console.log('fama ghalta', e);
      },
      complete: () => {
        console.log('oufa');
      },
    });
    this.sayHello.getTest().subscribe({
      next: (todos) => {
        console.log(todos);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log('oufa');
      },
    });
  }
}
