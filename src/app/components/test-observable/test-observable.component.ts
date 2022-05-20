import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit {
  monObservable$: Observable<number> | null = null;
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.monObservable$ = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.monObservable$.subscribe((val) => {
      console.log(val);
    });
    this.monObservable$
      .pipe(
        map((donnee) => donnee * 3),
        filter((x) => x % 2 != 0)
      )
      .subscribe({
        next: (x) => {
          this.toastr.info('' + x);
        },
        complete: () => {
          this.toastr.warning('a la prochaine :)');
        },
      });
  }
}
