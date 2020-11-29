import { Component, OnInit } from '@angular/core';
import { getJSDocThisTag } from 'typescript';

import * as News from '../../assets/news.json';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  all_news: Array<object>;
  recent_dropdown_icon: string;
  achievements_dropdown_icon: string;
  published_dropdown_icon: string;
  exhibition_dropdown_icon: string;
  display_recent: string;
  display_achievements: string;
  display_published: string;
  display_exhibition: string;
  selected_news: any;
  news_selected: boolean;
  recent_news: Array<object>;
  achievements_news: Array<object>;
  published_news: Array<object>;
  exhibition_news: Array<object>;
  
  constructor() { }

  ngOnInit(): void {
    this.all_news = News.news
    this.recent_dropdown_icon = 'Group 332.svg';
    this.achievements_dropdown_icon = 'Group 333.svg';
    this.published_dropdown_icon = 'Group 333.svg';
    this.exhibition_dropdown_icon = 'Group 333.svg';
    this.display_recent = 'block';
    this.display_achievements = 'none';
    this.display_published = 'none';
    this.display_exhibition = 'none';
    this.selected_news = this.all_news[0];
    this.news_selected = false;
    this.__get_news()
 
  }

  dropDown(type){
    if (type=="recent"){
      if (this.recent_dropdown_icon == 'Group 333.svg'){
        this.recent_dropdown_icon = 'Group 332.svg'
        this.display_recent = 'block'
      } else {
        this.recent_dropdown_icon = 'Group 333.svg'
        this.display_recent = 'none'
      }
    } else if (type=="achievements"){
      if (this.achievements_dropdown_icon == 'Group 333.svg'){
        this.achievements_dropdown_icon = 'Group 332.svg'
        this.display_achievements = 'block'
      } else {
        this.achievements_dropdown_icon = 'Group 333.svg'
        this.display_achievements = 'none'
      }
    } else if (type=="published"){
      if (this.published_dropdown_icon == 'Group 333.svg'){
        this.published_dropdown_icon = 'Group 332.svg'
        this.display_published = 'block'
      } else {
        this.published_dropdown_icon = 'Group 333.svg'
        this.display_published = 'none'
      }
    } else if (type=="exhibition"){
      if (this.exhibition_dropdown_icon == 'Group 333.svg'){
        this.exhibition_dropdown_icon = 'Group 332.svg'
        this.display_exhibition = 'block'
      } else {
        this.exhibition_dropdown_icon = 'Group 333.svg'
        this.display_exhibition = 'none'
      }
    }

  }

  getDisplay(type){
    if (type=="recent"){
      return this.display_recent
    } else if (type=="achievements"){
      return this.display_achievements
    } else if (type=="published"){
      return this.display_published
    } else if (type=="exhibition"){
      return this.display_exhibition
    }
  }

  selectNews(newsId){
    this.all_news.forEach( (news) => {
      if(news['id'] == newsId){
        this.selected_news = news
      }
    });
  }

  readMore(){
    this.news_selected = true
  }

  getFontWeight(component){
    if (component == this.selected_news.id) {
      return 'bold';
    } else{
      return 'normal';
    }
  }

  __get_news(){
    this.exhibition_news = []
    this.achievements_news = []
    this.published_news = []
    this.recent_news = []
    this.all_news.forEach( (news) => {
      if(news['type'] == "Exhibition"){
        this.exhibition_news.push(news)
      } else if(news['type'] == "Achievements"){
        this.achievements_news.push(news)
      } else if(news['type'] == "Published"){
        this.published_news.push(news)
      }
    });
    this.recent_news = this.all_news.slice(0,4)
  }
}
