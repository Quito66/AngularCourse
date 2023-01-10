import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../models/adcomponent';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements OnInit,AdComponent{
  constructor(){}
  @Input()
  data: any;
  ngOnInit(): void {
      
  }
}
