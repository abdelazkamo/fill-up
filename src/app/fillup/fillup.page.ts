import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fillup',
  templateUrl: './fillup.page.html',
  styleUrls: ['./fillup.page.scss'],
})
export class FillupPage implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
  }
  public goToNextPage() {
    this.route.navigate(['/payement']);
  }
}
