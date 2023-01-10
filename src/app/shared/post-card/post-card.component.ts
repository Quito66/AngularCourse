import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../models/adcomponent';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit,AdComponent{
  constructor(){}
  @Input()
  data: any;
  ngOnInit(): void {
      
  }
}
