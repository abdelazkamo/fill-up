import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.page.html',
  styleUrls: ['./cash.page.scss'],
})
export class CashPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  public goToNextPage() {
    this.route.navigate(['/code']);
  }
}
