import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
    window.location.href = "tel:+201004848737";
 }
 MyCV(){
  this.router.navigate(['/mycv']);
 }
 GoToHomePage(){
  this.router.navigate(['']);
}
 
}
