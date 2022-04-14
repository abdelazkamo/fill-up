import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.page.html',
  styleUrls: ['./thanks.page.scss'],
})
export class ThanksPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  public goToNextPage() {
    this.route.navigate(['/scan']);
  }
}
