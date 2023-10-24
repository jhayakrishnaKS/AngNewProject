import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { Info } from 'src/app/models/info'; // Adjust the path accordingly

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
   details: Info | null = null;

  constructor(private router: Router, private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.details = this.detailsService.getDetails();
    console.log(this.details);
  }
}
