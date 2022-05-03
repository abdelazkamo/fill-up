import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor(
    public route: Router,
    public alertCtrl: AlertController,
    public $localStorage: LocalStorageService
    ) { }

  ngOnInit() {
    this.$localStorage.store('hasShopped', true)
  }

  async showConfirm() {
    if (!this.$localStorage.retrieve('hasFilledUp')) {
      const confirm = await this.alertCtrl.create({
        header: 'Are you filling up ?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.route.navigate(['/fillup']);
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
          }
        ]
      });
      await confirm.present();
    }
  }
}
