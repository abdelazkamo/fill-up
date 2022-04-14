import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  public goToNextPage() {
    this.route.navigate(['/thanks']);
  }
}
