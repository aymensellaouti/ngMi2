import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { MES_ROUTES } from '../../../config/router';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cv = this.cvService.findCvById(params.id);
      if (!this.cv) this.router.navigate([MES_ROUTES.cv]);
    });
  }
  delete() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
      this.router.navigate([MES_ROUTES.cv]);
    }
  }
}
