import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cv } from '../model/cv';
import { HttpClient } from '@angular/common/http';
import { APIS } from '../../../config/apis';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  private selectCvSubject = new Subject<Cv>();
  selectCvObservable$ = this.selectCvSubject.asObservable();
  constructor(
    private http: HttpClient
  ) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', '', '123', 39),
      new Cv(
        2,
        'sellaouti',
        'skander',
        'bebe',
        '                         ',
        '123',
        3
      ),
      new Cv(
        3,
        'sellaouti',
        'skander',
        'bebe',
        'rotating_card_profile3.png',
        '123',
        3
      ),
    ];
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvs(): Observable<Cv[]>{
    return this.http.get<Cv[]>(APIS.cv);
  }
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  findCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }

  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}
