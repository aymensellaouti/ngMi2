import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
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
  getCvs(): Cv[] {
    return this.cvs;
  }
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if(index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  findCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }

}
