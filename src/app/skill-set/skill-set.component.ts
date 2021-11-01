import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  GoThingsImProudOfPage(){
    this.router.navigate(['/thingsProudOf']);
  }
  GoToContactPage(){
    this.router.navigate(['/contactMe']);
   }

}
