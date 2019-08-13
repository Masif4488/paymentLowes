
import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material';
import {Paymentdue} from './model/paymentdue';
import {PaymentService} from './payment.service';
import { CreditCardValidator } from 'angular-cc-library';
import * as cardValidator from 'card-validator';
/**
 * @title Stepper label bottom position
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerCard: FormGroup;
  paymentDue: Paymentdue;
  // tslint:disable-next-line: variable-name
  button_value = 'continue';
  // tslint:disable-next-line: variable-name
  Pay_value = 'Pay';
  // tslint:disable-next-line: variable-name
  image = '';
  opencreditForm = false;
  showCard = true;
  submitted = false;
  isDisabled = false;
  resetting = false;
  transactionPay = 'Pay now';
 // seasons: string[] = ['Pay now', 'Create a Payment schedule'];
  color = 'primary';
  mode = 'determinate';
  min = '25';
  max = '450';
  value = '320'
  clicked = false;
  transaction = [
    { name: 'Pay now'},
    { name: 'Create a Payment schedule'}
];

  public type: any | 'any';
  public cardnumber: any;
  public cardnum: any = '';
  public mask = {
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
          /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
          /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
          /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]
  };
  constructor(private paymentService: PaymentService, private formBuilder: FormBuilder ,private paymentSvc: PaymentService ) {
    this.createCard();
  }
  createCard() {
    this.registerCard = this.formBuilder.group({
      CardName: [null, Validators.required],
      CardNumber : ['', [  CreditCardValidator.validateCCNumber as any]],
      // CardExpry :  ['', [ CreditCardValidator.validateExpDate]],
      CardCvc   :['', [Validators.required as any, Validators.minLength(3) as any, Validators.maxLength(4) as any]]
    });
  }
  ngOnInit() {
    // this.paymentService.getPaymentDue().subscribe(paymentDue => this.paymentDue = paymentDue);
  }
  continueStepper(stepper: MatStepper) {
    console.log(stepper.selected);
    console.log(stepper.selectedIndex);
    stepper.next();
    // tslint:disable-next-line: triple-equals
    if (stepper.selected.state == 'history') {
      this.Pay_value = ' Done ' ;
      this.showCard = true ;
      this.resetting = true;
    }
    if (stepper.selected.state == 'credit_card') {
      this.button_value = 'Pay';
      this.isDisabled = true ;
    }
}

buttonReset(stepper: MatStepper) {
  stepper.reset();
  this.opencreditForm = false;
  this.isDisabled= false;
  this.button_value= 'Continue';
  this.resetting = false;

}
creditCard() {
this.opencreditForm = true;
}

showContinue() {
this.showCard = false;
this.cardnumber = this.cardnum.split(/[\_\s]+/ig).join('');
this.type = cardValidator.number(this.cardnumber);
console.log(this.type.card.niceType);
const type = this.type.card.niceType ;

switch (type)
{
  case 'Mastercard':
      this.image = 'assets/images/debitcard.png';
      break;

  case 'American Express':
      this.image = 'assets/images/americanExpress.png';
      break;

  case 'Maestro':
      this.image = 'assets/images/Maestro.png';
      break;

  case 'Diners Club':
        this.image = 'assets/images/DinersClub.png';
        break;
  case 'Discover':
          this.image = 'assets/images/Discover.png';
          break;
  case 'JCB':
          this.image = 'assets/images/jcb.png';
          break;
  case 'Visa':
          this.image = 'assets/images/Visa.png';
          break;
}

}
addCard(CardName, CardNumber, CardExpry, CardCvc) {
  alert(CardName + CardNumber+CardExpry+CardCvc) ;
  // this.paymentService.addCard(CardName, CardNumber, CardExpry, CardCvc );
  // this.submitted=true;
  // if (this.registerCard.invalid) {
  //   return;
  // }
  // if(this.submitted){

  // }
}

}
