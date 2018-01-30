import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup,Validators,FormBuilder } from '@angular/forms/';
import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {
    private registerForm: FormGroup;

    constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private menu: MenuController, private alertCtrl: AlertController) {
        localStorage.clear();
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.compose([Validators.required,Validators.pattern('[a-z A-Z 0-9]+')])],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.required],
            cpassword: ['', Validators.required]
        }, {validator: this.matchPassword('password', 'cpassword')});
        this.menu.swipeEnable(false);
    }

    matchPassword(passwordKey: string, cpasswordKey: string){
        return(group: FormGroup): {[key: string]: any} => {
            let password = group.controls[passwordKey];
            let cpassword = group.controls[cpasswordKey];

            if(password.value != cpassword.value){
                return{
                    mismatchedPasswords: true
                };
            }
        }
    }

    regForm(){
        console.log(this.registerForm.value);
        localStorage.setItem('User', this.registerForm.value);
        this.navCtrl.setRoot(HomePage);
    }

    goLogin(){
        this.navCtrl.setRoot(LoginPage);
    }
}