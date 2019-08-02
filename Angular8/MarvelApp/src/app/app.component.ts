
import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material';
import {Paymentdue} from './model/paymentdue';
import {PaymentService} from './payment.service';
import { CreditCardValidator } from 'angular-cc-library';
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
  opencreditForm = false;
  showCard = true;
  submitted = false;
  isDisabled = false;
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

  constructor(private paymentService: PaymentService, private formBuilder: FormBuilder) {
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
    console.log(stepper.selected.state);
    console.log(stepper.selectedIndex);
    stepper.next();
    if(stepper.selected.state == 'history'){
      this.button_value = "Done";
      this.Pay_value = "Done"
      // if(this.Pay_value || this.button_value === 'Done'){
      //   stepper.reset();
      // }
    }
    if(stepper.selected.state == 'credit_card'){
      this.button_value = "Pay";
      this.isDisabled = true
    }




    // if(stepper.steps.toArray()[3].state){
    //   stepper.reset();
    // }
    // if (this.opencreditForm === true) {
    //   // tslint:disable-next-line: no-unused-expression
    //   this.button_value === 'Pay';
    // }
    // if (stepper.steps.toArray()[3].state ) {
    //   // tslint:disable-next-line: no-unused-expression
    //     // this.button_value= "Pay";
    // }
}
creditCard() {
this.opencreditForm = true;
}

showContinue() {
this.showCard = false;
}

addCard(CardName, CardNumber, CardExpry, CardCvc) {
  alert(CardName + CardNumber+CardExpry+CardCvc)
  // this.paymentService.addCard(CardName, CardNumber, CardExpry, CardCvc );
  // this.submitted=true;
  // if (this.registerCard.invalid) {
  //   return;
  // }
  // if(this.submitted){

  // }
}

}
