import { Component, OnInit, ViewChild } from '@angular/core';
import * as People from '../../assets/people.json';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  category: string;
  member: object;
  people: Array<object>;
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    arrows: false
  };

  constructor() { }

  ngOnInit(): void {
    this.category = "CASSA"
    this.people = People.people
    this.member = this.people[2]
  }

  setCategory(category){
    this.category = category;
  }

  setMember(member){
    this.member = member
  }
  
  getFontWeight(component){
    if(component == this.category){
      return 'bold';
    } else {
      return 'normal';
    }
  }

  getColor(component){
    if(component == this.category){
      return '#ffffff';
    } else {
      return '#ffffff';
    }
  }

  getVisibility(component){
    if(component == this.category){
      return 'visible';
    } else {
      return 'hidden';
    }
  }

  getFontWeightMember(component){
    if(component == this.member['id']){
      return 'bold';
    } else {
      return 'normal';
    }
  }

  getColorMember(component){
    if(component == this.member['id']){
      return '#12131c';
    } else {
      return '#bebebe';
    }
  }

  getVisibilityMember(component){
    
    if(component == this.member['id']){
      return 'visible';
    } else {
      return 'hidden';
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
    console.log("next")
    this.slickModal.slickNext();
  }
  
  prev() {
    this.slickModal.slickPrev();
  }
}
