import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myWebsite';
  constructor(private router: Router) { }

  GoToAcademicTimeLinePage(){
    this.router.navigate(['/academicTimeLine']);
 }
 GoToHomePage(){
  this.router.navigate(['/home']);
}
GoToSkillSetPage(){
  this.router.navigate(['/skillsSet']);
}
 GoToThingsProudOfPage(){
   this.router.navigate(['/thingsProudOf']);
 }
 GoToGitHubAccount(){
   window.location.href = "https://github.com/omarrifky";
 }
 GoToFacebookAccount(){
   window.location.href = "https://www.facebook.com/profile.php?id=1219482491";
 }
 GoToLinkedinAccount(){
   window.location.href = "https://www.linkedin.com/in/omar-khaled-ekram-rifky-651ab514b/";
 }
 EmailMe(){
  window.location.href = "mailto:omarkhaledrifky@hotmail.com?Subject= ";
}
 CallMe(){
}
MyCV(){
  
}

}
