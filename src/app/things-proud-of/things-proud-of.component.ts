import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-things-proud-of',
  templateUrl: './things-proud-of.component.html',
  styleUrls: ['./things-proud-of.component.css',]
})
export class ThingsProudOfComponent implements OnInit {
index : number = 0;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  Next(){
 this.index = this.index+1;
 if(this.index==5)
 this.index=0;
  }
Previous(){
  
  this.index = this.index-1;
  if(this.index==-1)
  this.index=4;
}
ContactMe(){
  this.router.navigate(['/contactMe']);
}
}
