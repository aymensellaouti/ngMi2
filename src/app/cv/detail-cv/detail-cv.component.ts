import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { MES_ROUTES } from '../../../config/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.findCvById(params.id).subscribe({
        next: (cv) => {
          this.cv = cv;
        },
        error: (e) => {
          this.router.navigate([MES_ROUTES.cv]);
        },
      });
    });
  }
  delete() {
    if (this.cv) {
      this.cvService.deletCvById(this.cv.id).subscribe({
        next: (data) => {
          console.log('data after delete', data);
          this.router.navigate([MES_ROUTES.cv]);
        },
        error: (error) => {
          console.log('error after delete:', error);
        },
      });
    }
  }
}
