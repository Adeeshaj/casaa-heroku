import { Component, OnInit } from '@angular/core';
import * as Projects from '../../assets/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  category: string;
  project_selected: boolean;
  all_projects: Array<string>;

  constructor() { 
  }

  ngOnInit(): void {
    this.category = "all"
    this.project_selected = false
    this.all_projects = Projects.projects.all
    console.log(this.all_projects);
  }

  setCategory(category){
    this.category = category;
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
      return '#12131c';
    } else {
      return '#bebebe';
    }
  }

  getVisibility(component){
    if(component == this.category){
      return 'visible';
    } else {
      return 'hidden';
    }
  }
}
