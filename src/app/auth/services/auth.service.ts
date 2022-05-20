import { Injectable } from '@angular/core';
import { CredentialsDto } from '../dtos/credentials.dto';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../dtos/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APIS } from '../../../config/apis';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APIS.login, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
