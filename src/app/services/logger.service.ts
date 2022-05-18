import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  loggerCeQueTuVeux(data: any) {
    console.log('Logged From Logger : ', data);

  }
}
