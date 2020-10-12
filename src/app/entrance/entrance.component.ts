import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {
  CURRENT_SLIDE: number;

  constructor() { }

  ngOnInit(): void {
    this.CURRENT_SLIDE = 1 
  }

  getUrl(slide){
    if(slide == 'left'){
      return "url('http://127.0.0.1:8887/img/Landing Page/1 .jpg')";
    } if (slide == 'right') {
      return "url('http://127.0.0.1:8887/img/Landing Page/2 .mp4')";
    }
  }

  getUrlById(id){
    if(id==1){
      return "url('http://127.0.0.1:8887/img/Landing Page/1 .jpg')";
    } else if(id == 2) {
      return "url('http://127.0.0.1:8887/img/Landing Page/2 .mp4')";
    } else if(id == 3) {
      return "url('http://127.0.0.1:8887/img/Landing Page/3 .jpg')";
    } else if(id == 4) {
      return "url('http://127.0.0.1:8887/img/Landing Page/4 .jpg')";
    } else if(id == 5) {
      return "url('http://127.0.0.1:8887/img/Landing Page/5 .jpg')";
    } else if(id == 6) {
      return "url('http://127.0.0.1:8887/img/Landing Page/6 .mp4')";
    } else {
      return "url('http://127.0.0.1:8887/img/Landing Page/1 .tif')";
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
      'left': '0px',
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
      'left': '1366px',
      'top': '0px',
      'z-index': 1
    }
  }
}
