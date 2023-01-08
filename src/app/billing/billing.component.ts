import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  public datum =[
    {"product":"Sony","prize":"100","quantity":"5"},
    {"product":"Sony","prize":"100","quantity":"5"},
    {"product":"Sony","prize":"100","quantity":"5"}
  ]

  public prize ="600";
  public quality="2";


}
