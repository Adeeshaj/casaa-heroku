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
  all_projects: Array<object>;
  selected_project: object

  constructor() { 
  }

  ngOnInit(): void {
    this.category = "All"
    this.project_selected = false
    this.all_projects = Projects.projects.projects
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

  selectProject(project){
    this.project_selected = true
    this.selected_project = project
    console.log(this.selected_project)
  }

  getProjectVisibility(project_type){
    if (this.category == 'All'){
      return 'inherit';
    } else if(project_type == this.category){
      return 'inherit';
    } else {
      return 'none';
    }
  }
}
