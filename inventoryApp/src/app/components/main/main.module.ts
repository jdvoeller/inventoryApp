import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainToolbarModule } from '../main-toolbar/main-toolbar.module';
import { RecentlyAddedCarouselModule } from '../recently-added-carousel/recently-added-carousel.module';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';

@NgModule({
	imports: [
		MainToolbarModule,
		MainRoutingModule,

		RecentlyAddedCarouselModule,
	],
	exports: [MainComponent],
	declarations: [MainComponent],
})
export class MainModule { }
