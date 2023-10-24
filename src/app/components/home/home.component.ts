import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Info } from 'src/app/models/info';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private detailsService: DetailsService) {}

  onSubmit(form: NgForm) {
    this.detailsService.save(form.value);
    form.resetForm();
    this.router.navigate(['/details']);
  }
}
