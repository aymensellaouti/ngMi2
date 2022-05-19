import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css'],
})
export class CvCardComponent implements OnInit {
  @Input() cv: Cv | null = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)) {
        this.toastr.success(
          `${this.cv.firstname} ${this.cv.name} a été embauché avec succès`
        );
      } else {
        this.toastr.warning(
          `${this.cv.firstname} ${this.cv.name} est déjà embauché`
        );
      }
    }
  }
}
