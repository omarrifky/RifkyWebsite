import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcademicTimeLineComponent } from './academic-time-line/academic-time-line.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ThingsProudOfComponent } from './things-proud-of/things-proud-of.component';
import { MyCVComponent } from './my-cv/my-cv.component';
const routes: Routes = [
  { path: '',component: HomeComponent},
   { path: 'home',component: HomeComponent},
 { path: 'academicTimeLine',component: AcademicTimeLineComponent },
 { path: 'thingsProudOf',component: ThingsProudOfComponent },
 { path: 'skillsSet',component: SkillSetComponent },
 { path: 'contactMe',component: ContactMeComponent },
 { path: 'mycv',component: MyCVComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


