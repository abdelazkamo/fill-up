import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.page.html',
  styleUrls: ['./payement.page.scss'],
})
export class PayementPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  public goToCashPage() {
    this.route.navigate(['/cash']);
  }
  public goToCardPage() {
    this.route.navigate(['/card']);
  }
}
