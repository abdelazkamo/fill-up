import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(
    public route: Router
  ) { }

  ngOnInit() {
  }
  public goToNextPage() {
    this.route.navigate(['/services']);
  }

}
