import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  public goToNextPage() {
    this.route.navigate(['/summary']);
  }

}
