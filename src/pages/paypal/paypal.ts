import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal'

@Component({
  selector: 'page-paypal',
  templateUrl: 'paypal.html'
})
export class PayPalPage {
  payment: PayPalPayment = new PayPalPayment('3.33', 'SGD', 'Description', 'sale');
  currencies = ['SGD'];

  constructor(public navCtrl: NavController, private payPal: PayPal) {

  }

  makePayment(){
    this.payPal.init({
      PayPalEnvironmentProduction: '',
      PayPalEnvironmentSandbox: 'AUy3vqzaoHY8Z9jylNIR14sieuNdcp1d7DUPc_vE9xkE91r0gXZpSHEjw_I21VO0Yi6TGzfvKQ4qtJVA'
    }).then(() => {
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({})).then(() => {
        this.payPal.renderSinglePaymentUI(this.payment).then((response) => {
          alert('Successfully paid. Status = ${response.response.state}');
          console.log(response);
        },() => {
          console.error('Error on render dialog closed without being successful');
        });
      },() => {
        console.error('Error in configuration');
      });
    },() => {
      console.error('Error in intialization');
    })
  }

}
