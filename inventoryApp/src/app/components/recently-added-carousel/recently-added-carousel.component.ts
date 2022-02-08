import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { throwError } from 'rxjs';

@Component({
	selector: 'recently-added-carousel',
	templateUrl: 'recently-added-carousel.component.html',
	styleUrls: ['recently-added-carousel.component.css'],
})

export class RecentlyAddedCarouselComponent {
	public foodPics = [
		'../../../assets/test-food-pics/1.jpg',
		'../../../assets/test-food-pics/2.jpeg',
		'../../../assets/test-food-pics/3.jpg',
	]
	public limit: number = 10;
	public customOptions: OwlOptions = {
		loop: true,
		autoplay: true,
		center: true,
		dots: false,
		autoHeight: true,
		autoWidth: true,
		responsive: {
		  0: {
			items: 1,
		  },
		  600: {
			items: 1,
		  },
		  1000: {
			items: 1,
		  }
		}
	  }

	constructor() {
	}
}
