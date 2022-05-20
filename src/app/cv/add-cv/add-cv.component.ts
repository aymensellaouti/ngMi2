import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Cv } from '../model/cv';
import { MES_ROUTES } from '../../../config/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private tostr: ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  addCv(cv: Cv) {
    this.cvService.addCv(cv).subscribe({
      next:(cv) => {
        this.tostr.success(`Le cv de ${cv.firstname} ${cv.name} a été enregistré avecs succès :)`);
        this.router.navigate([MES_ROUTES.cv]);
      },
      error: (e) => {
        this.tostr.error('Problème avec le serveur, veuillez contacter l admin');
      }
    });
  }

}
