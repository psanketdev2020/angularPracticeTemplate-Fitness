import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

  benefitsSlider: {}

  constructor() {
    if (window.screen.width <= 768) {
      this.benefitsSlider = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        responsive: [
        ]
      }
    }else {
      this.benefitsSlider = {
        slidesToShow: 3,
      }
    }
  }

  ngOnInit(): void {

  }



  


}
