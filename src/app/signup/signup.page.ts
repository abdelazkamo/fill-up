import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  public goToNextPage() {
    this.route.navigate(['/login']);
  }
}
