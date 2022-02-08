import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { RecentlyAddedCarouselComponent } from './recently-added-carousel.component';

@NgModule({
	imports: [
		CommonModule,
		CarouselModule,
	],
	exports: [RecentlyAddedCarouselComponent],
	declarations: [RecentlyAddedCarouselComponent],
})
export class RecentlyAddedCarouselModule { }
