import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { AcademicTimeLineComponent } from './academic-time-line/academic-time-line.component';
import { ThingsProudOfComponent } from './things-proud-of/things-proud-of.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MyCVComponent } from './my-cv/my-cv.component';

//import { Observable } from 'rxjs/Observable';
// //import {MaterialModule} from '@angular/material';
// import { TypingAnimationDirective } from 'angular-typing-animation'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcademicTimeLineComponent,
    ThingsProudOfComponent,
    SkillSetComponent,
    ContactMeComponent,
    MyCVComponent,
    // TypingAnimationDirective,
    // Observable
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
