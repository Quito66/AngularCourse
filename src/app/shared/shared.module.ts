import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { AdDirective } from './models/addirective';
import { AdBannerComponent } from './ad-banner/ad-banner.component';

@NgModule({
    declarations: [
      PostCardComponent,
      ProductCardComponent,
      QuoteCardComponent,
      AdDirective,
      AdBannerComponent
  ],
    exports:[
      AdBannerComponent
    ],
    imports: [
      CommonModule
    ],
  })
export class SharedModule { }