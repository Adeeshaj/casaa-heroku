import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EntranceComponent } from './entrance/entrance.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    EntranceComponent,
    ProjectsComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
    BottomBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: EntranceComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'news', component: NewsComponent},
      {path: 'contact', component: ContactComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
