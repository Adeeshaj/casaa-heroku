import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  logo: string;
  route: string;

  constructor(location: Location, router: Router) { 
    router.events.subscribe(val => {
      if (location.path() == "") {
        this.logo = "assets_5. CASAA web Home page_2020-09-19/Group 324";
        this.route = "entrance"
      } else if (location.path() == "/projects"){
        this.logo = "assets_8. CASAA web project_2020-09-27/Group 325"
        this.route = "projects"
      } else if (location.path() == "/about"){
        this.logo = "assets_5. CASAA web Home page_2020-09-19/Group 324"
        this.route = "about"
      } else if (location.path() == "/news"){
        this.logo = "assets_8. CASAA web project_2020-09-27/Group 325"
        this.route = "news"
      } else if (location.path() == "/contact"){
        this.logo = "assets_8. CASAA web project_2020-09-27/Group 325"
        this.route = "contact"
      } else {
        this.logo = "assets_8. CASAA web project_2020-09-27/Group 325"
        this.route = "other"
      }
    });

  }

  ngOnInit(): void {
  }

  getBackground() {
    if (this.route == 'entrance') {
      return 'linear-gradient(to bottom, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0))'
    } else {
      return 'none'
    }
  }

  getColor(){
    console.log(this.route)
    if (this.route == "entrance"){
      return 'rgba(255, 255, 255, 0.77)'
    } else if (this.route == "about"){
      return '#ffffff'
    } else {
      return '#12131c'
    }
  }

  getFontWeight(component){
    if (component == "projects" && this.route == "projects"){
      return 'bold';
    } else if (component == "contact" && this.route == "contact") {
      return 'bold';
    } else if (component == "news" && this.route == "news" ) {
      return 'bold';
    } else if (component == "about" && this.route == "about") {
      return 'bold';
    } else if (this.route == 'entrance') {
      return 300
    } else {
      return 300
    }
  }

  getVisibility(component){
    if (component == "projects" && this.route == "projects"){
      return 'visible';
    } else if (component == "contact" && this.route == "contact") {
      return 'visible';
    } else if (component == "news" && this.route == "news" ) {
      return 'visible';
    } else if (component == "about" && this.route == "about") {
      return 'visible';
    } else if (this.route == 'entrance') {
      return 'hidden'
    } else {
      return 'hidden'
    }
  }
  




}
