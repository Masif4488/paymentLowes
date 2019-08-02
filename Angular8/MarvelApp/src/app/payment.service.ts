import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Paymentdue} from './model/paymentdue';
import { PaymentrequestBody } from './model/paymentrequest';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }


  getPaymentDue(): Observable<Paymentdue> {
    return this.http.get<Paymentdue>('/public/paymentduedetail');
  }

  addCard(paymentRequest: PaymentrequestBody): Observable<boolean> {

    console.log(paymentRequest.accountNumber);
    return this.http.post<boolean>(`http://localhost:8080/litepayment/create`, paymentRequest);
  }
}
