import { Component, Input, OnInit } from '@angular/core';
import { products } from '../models/products.model';
import { AdComponent } from '../models/adcomponent';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit,AdComponent{
  constructor(){}
  @Input()
  data: any;
  ngOnInit(): void {
      
  }
}
