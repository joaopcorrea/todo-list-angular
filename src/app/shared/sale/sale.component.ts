import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  public originalPrice: number = 0;
  public discountPercentage: number = 0;
  public finalPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.finalPrice = this.originalPrice - (this.originalPrice * (this.discountPercentage / 100)) - 0.01;
    console.log(this.finalPrice);
  }

}
