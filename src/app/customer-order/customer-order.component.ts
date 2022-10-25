import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {

  product1="BasketBall";
  price="$568";
  
  constructor() { }

  ngOnInit(): void {
  }

}
