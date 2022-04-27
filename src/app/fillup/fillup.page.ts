import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fillup',
  templateUrl: './fillup.page.html',
  styleUrls: ['./fillup.page.scss'],
})
export class FillupPage implements OnInit {

  constructor(
    public route: Router,
    public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async showConfirm() {
    const alert  = await this.alertCtrl.create({
      header: 'Are you shopping too?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.route.navigate(['/shop']);
          }
        },
        {
          text: 'No',
          handler: () => {
            this.route.navigate(['/summary']);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
      ]
    });
    await alert.present();
  }
}
