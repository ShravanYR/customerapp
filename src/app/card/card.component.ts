import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  customers:User[]=[];
  constructor(private testservice:TestService) { }

  ngOnInit(): void {
  }

  printCustomers(event:any){
    this.testservice.getCustomerData().subscribe(customers=>{
      this.customers=customers;
    })
  }

}
