import { Component, OnInit } from '@angular/core';
import { CredentialsDto } from '../dtos/credentials.dto';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginResponseDto } from '../dtos/login-response.dto';
import { MES_ROUTES } from '../../../config/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next: (response: LoginResponseDto) => {
        localStorage.setItem('token', response.id);
        this.toastr.success('Bienvenu chez vous :)');
        this.router.navigate([MES_ROUTES.cv]);
      },
      error: () => {
        this.toastr.error('Veuillez vérifier vos credentials :(');
      },
    });
  }
}
