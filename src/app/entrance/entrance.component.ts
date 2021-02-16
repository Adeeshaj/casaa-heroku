import { Time } from '@angular/common';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {
  CURRENT_SLIDE: number;
  NEXT_SLIDE: number;
  TIMEOUT: number;
  StartTime: number;
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  slides = [
    {img: '/assets/img/Landing Page/1 .mp4', proj_name: 'Nestled Hideaway Villa'},
    {img: "/assets/img/Landing Page/2 .mp4", proj_name: 'Boutique Hotel Kandy'},
    {img: "/assets/img/Landing Page/3 .mp4", proj_name: 'South Bolgoda Retreat'},
    {img: "/assets/img/Landing Page/4 .mp4", proj_name: 'House One'},
    {img: '/assets/img/Landing Page/5 .mp4', proj_name: 'Entrance Gateways to the UNESCO World Heritage City of Anuradhapura'},
    {img: "/assets/img/Landing Page/6 .mp4", proj_name: 'South Bolgoda Retreat'},
  ];
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 9000
  };
  constructor() { }

  ngOnInit(): void {
    this.CURRENT_SLIDE = 0
    this.TIMEOUT = 10
    this.StartTime = new Date().getTime()
  }

  getVisibility(component, component_id){
    if(component=='line'){
      if (component_id == this.CURRENT_SLIDE){
        return 'block';
      } else {
        return 'none';
      }
    } else if(component=='dot'){
      if (component_id == this.CURRENT_SLIDE){
        return 'none';
      } else {
        return 'block';
      }
    } else if(component=='dot-selected'){
      if (component_id == this.CURRENT_SLIDE){
        return 'block';
      } else {
        return 'none';
      }
    }
  }

  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    this.CURRENT_SLIDE = e.currentSlide
    this.NEXT_SLIDE = e.nextSlide
    console.log('afterChange');
  }
  
  beforeChange(e) {

    console.log('beforeChange');
  }

  next() {
    this.slickModal.slickNext();
  }
  
  prev() {
    this.slickModal.slickPrev();
  }

  goTo(slide){
    this.slickModal.slickGoTo(slide);
  }
}
