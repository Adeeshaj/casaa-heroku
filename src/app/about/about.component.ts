import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  category: string;
  member: string;

  constructor() { }

  ngOnInit(): void {
    this.category = "CASSA"
    this.member = "Isurunath Bulankulame"
  }

  setCategory(category){
    this.category = category;
  }

  setMember(member){
    console.log("xx")
    this.member = member
    console.log(this.member)
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
    if(component == this.member){
      return 'bold';
    } else {
      return 'normal';
    }
  }

  getColorMember(component){
    if(component == this.member){
      return '#12131c';
    } else {
      return '#bebebe';
    }
  }

  getVisibilityMember(component){
    if(component == this.member){
      return 'visible';
    } else {
      return 'hidden';
    }
  }
}
