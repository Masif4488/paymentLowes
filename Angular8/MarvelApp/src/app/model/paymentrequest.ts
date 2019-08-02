export class PaymentrequestBody {

  amount: number;
  accountNumber: number;
  cvv: number;
  cardHolderName: string;
  paymentType: string;
  paymentSubType: string;

  constructor(  amount: number, accountNumber: number, cvv: number, cardHolderName: string,  paymentType: string,  paymentSubType: string) {
    this.amount = amount;
    this.accountNumber = accountNumber;
    this.cvv = cvv;
    this.cardHolderName = cardHolderName;
    this. paymentType = paymentType;
    this.paymentSubType = paymentSubType;
  }
}
