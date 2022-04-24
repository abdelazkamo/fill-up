import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor(
    public route: Router,
    public alertCtrl: AlertController
    ) { }

  ngOnInit() {
  }

  async showConfirm() {  
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