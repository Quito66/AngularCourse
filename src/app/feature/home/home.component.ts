import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ads:any;
  constructor(private homeService: HomeService){}
  ngOnInit(): void {
      this.ads= this.homeService.getItems();
  }
}
