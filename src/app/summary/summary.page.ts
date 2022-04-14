import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  public goToNextPage() {
    this.route.navigate(['/payement']);
  }

}
