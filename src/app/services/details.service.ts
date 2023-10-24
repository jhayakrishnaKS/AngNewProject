import { Injectable } from '@angular/core';
import { Info } from 'src/app/models/info';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  private details: Info | null = null;

  constructor(private route: Router) {}

  save(homeDetails: Info): void {
    // console.log(homeDetails);
    this.details = {
      email: homeDetails.email,
      password: homeDetails.password,
      phoneNumber: homeDetails.phoneNumber,
    };
    // console.log(this.details);
  }
  getDetails(): Info | null {
    return this.details;
  }

}
