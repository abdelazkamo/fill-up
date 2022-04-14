import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  public goToNextPage() {
    this.route.navigate(['/code']);
  }
}
