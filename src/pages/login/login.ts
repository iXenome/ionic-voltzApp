import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup,Validators,FormBuilder } from '@angular/forms/';
import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    private loginForm: FormGroup;

    constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private menu: MenuController, private alertCtrl: AlertController) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.compose([Validators.required,Validators.pattern('[a-z A-Z 0-9]+')])],
            password: ['', Validators.required]
        });
        this.menu.swipeEnable(false);
    }

    logForm(){
        console.log(this.loginForm.value);
        if(this.loginForm.controls.username.value == 'Voltz'){
            if(this.loginForm.controls.password.value == 'xenome31113'){
                this.menu.swipeEnable(true);
                this.navCtrl.setRoot(HomePage);
            }
            else{
                let alert = this.alertCtrl.create({
                    title: "Error",
                    subTitle: 'Incorrect username/password. Please check your credentials again.',
                    buttons: ['OK']
                });
                alert.present();
            }
        }
        else{
            let alert = this.alertCtrl.create({
                title: "Error",
                subTitle: 'Incorrect username/password. Please check your credentials again.',
                buttons: ['OK']
            });
            alert.present();
        }
    }
}