import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: 'index.html',
  styleUrls: ['index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/']);
  }
  GoToAcademicTimeLinePage(){
    this.router.navigate(['/academicTimeLine']);
 }
 GoToContactPage(){
  this.router.navigate(['/contactMe']);
 }
}
