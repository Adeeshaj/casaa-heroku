import { Component, OnInit, ViewChild} from '@angular/core';
import { NgModel } from '@angular/forms';
import * as Projects from '../../assets/projects.json';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  category: string;
  project_selected: boolean;
  all_projects: Array<object>;
  selected_project: object;
  selected_image: string;
  slideConfigNav: object;
  sildeConfigFor: object;
  nextProject: object;
  prevProject: object;
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  @ViewChild('slickModal2') slickModal2: SlickCarouselComponent;

  constructor() { 
  }

  ngOnInit(): void {
    this.category = "All"
    this.project_selected = false
    this.all_projects = Projects.projects.projects
  }

  setCategory(category){
    this.category = category;
    this.project_selected = false;
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
    this.selected_image = this.selected_project['images'][0]
    this.slideConfigNav = {
      slidesToShow: 10,
      slidesToScroll: 1,
      dots: false,
      centerMode: true,
      focusOnSelect: true
    };
    this.sildeConfigFor = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      centerMode: true,
    };
    this.nextProject = this.getNextProject()
    this.prevProject = this.getPrevProject()
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

  getSelectedImage(){
    if(this.project_selected){
      console.log("url('assets/img/projects/"+this.selected_project['id']+"/"+this.selected_image+"')")
      return "url('assets/img/projects/"+this.selected_project['id']+"/"+this.selected_image+"')"
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
    this.slickModal2.slickNext();
  }
  
  prev() {
    this.slickModal.slickPrev();
    this.slickModal2.slickPrev();
  }

  getTopPositionDescriptionPara(i){
    let top = 20 * i;
    
    return top.toString() +"px"
  }

  getNextProject(){
    let length_all_projects = this.all_projects.length
    let index = this.all_projects.indexOf(this.selected_project)
    if (length_all_projects-1 <= index){
      var next_project = this.all_projects[0]
    } else {
      var next_project = this.all_projects[index+1]
    }
    return next_project
  }

  getPrevProject(){
    let length_all_projects = this.all_projects.length
    let index = this.all_projects.indexOf(this.selected_project)
    if (0 >= index){
      var prev_project = this.all_projects[length_all_projects-1]
    } else {
      var prev_project = this.all_projects[index-1]
    }
    return prev_project
  }

  
  
}
