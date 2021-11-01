import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-academic-time-line',
  templateUrl: './academic-time-line.component.html',
  styleUrls: ['./academic-time-line.component.css']
})
export class AcademicTimeLineComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  GoToSkillsPage(){
    this.router.navigate(['/skillsSet']);
  }
  GoToContactPage(){
    this.router.navigate(['/contactMe']);
   }
   
}
