import { Time } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {
  CURRENT_SLIDE: number;
  TIMEOUT: number;
  StartTime: number;
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  slides = [
    {img: '/assets/img/Landing Page/1 .mp4'},
    {img: "/assets/img/Landing Page/2 .mp4"},
    {img: "/assets/img/Landing Page/3 .mp4"},
    {img: "/assets/img/Landing Page/4 .mp4"},
    {img: '/assets/img/Landing Page/5 .mp4'},
    {img: "/assets/img/Landing Page/6 .mp4"},
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
    this.CURRENT_SLIDE = 1
    this.TIMEOUT = 10
    this.StartTime = new Date().getTime()
  }

  getUrl(slide){
    if(this.isTimeElapsed(this.StartTime)){
      if(slide == 'right' || slide == 'next'){
        return this.getUrlById(this.right());
      } else if (slide == 'left') {
        return this.getUrlById(this.left());
      }
    } 
  }

  getUrlById(id){
    if(id==1){
      return "url('/assets/img/Landing Page/1 .jpg')";
    } else if(id == 2) {
      return "url('/assets/img/Landing Page/2 .mp4')";
    } else if(id == 3) {
      return "url('/assets/img/Landing Page/3 .jpg')";
    } else if(id == 4) {
      return "url('/assets/img/Landing Page/4 .jpg')";
    } else if(id == 5) {
      return "url('/assets/img/Landing Page/5 .jpg')";
    } else if(id == 6) {
      return "url('/assets/img/Landing Page/6 .mp4')";
    } else {
      return "url('/assets/img/Landing Page/1 .jpg')";
    }
  }
  
  right(){
    this.CURRENT_SLIDE +=1
    if (this.CURRENT_SLIDE<=6){
      console.log(this.getUrlById(this.CURRENT_SLIDE));
    } else if (this.CURRENT_SLIDE>6){
      this.CURRENT_SLIDE = 1
      console.log(this.getUrlById(this.CURRENT_SLIDE));
    }
  }

  left(){
    this.CURRENT_SLIDE -=1
    if (this.CURRENT_SLIDE>=1){
      console.log(this.getUrlById(this.CURRENT_SLIDE));
    } else if (this.CURRENT_SLIDE<1){
      this.CURRENT_SLIDE = 6
      console.log(this.getUrlById(this.CURRENT_SLIDE));
    }
  }

  calcuateStylesLeft() {
    return {
      'background-image': this.getUrl('left'),
      'background-size': 'cover',
      'background-position': 'center',
      'width': '1366px', 
      'height':'768px', 
      'position': 'absolute',
      'left': '-1366px',
      'top': '0px',
      'z-index': 0
    }
  }

  calcuateStylesRight(){
    return {
      'background-image': this.getUrl('right'),
      'background-size': 'cover',
      'background-position': 'center',
      'width': '1366px', 
      'height':'768px', 
      'position': 'absolute',
      'left': '0px',
      'top': '0px',
      'z-index': 1
    }
  }

  isTimeElapsed(start){
    var elapsed = new Date().getTime() - start;
    if(elapsed > this.TIMEOUT){
      return true;
    } else {
      return false;
    }
  }

  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
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
}
