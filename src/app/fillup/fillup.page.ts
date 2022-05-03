import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-fillup',
  templateUrl: './fillup.page.html',
  styleUrls: ['./fillup.page.scss'],
})
export class FillupPage implements OnInit {
  public amount: number;

  constructor(
    public route: Router,
    public alertCtrl: AlertController,
    public $localStorage: LocalStorageService) {
  }

  ngOnInit() {
    this.$localStorage.store('hasFilledUp', true)
  }

  async showConfirm() {
    if (!this.amount) {
      const alert = await this.alertCtrl.create({
        header: 'Please Enter a fill up amount.',
        buttons: [
          {
            text: 'Okay',
            role: 'cancel',
            handler: () => {
            }
          },
        ]
      });
      await alert.present();
    }
    console.log(this.$localStorage.retrieve('hasShopped'))
    if (this.$localStorage.retrieve('hasShopped') != true && this.amount) {
      this.$localStorage.store('fillUpAmount', this.amount);
      const alert = await this.alertCtrl.create({
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
    } else if (this.amount) {
      await this.route.navigate(['/summary']);
    }
  }
}
