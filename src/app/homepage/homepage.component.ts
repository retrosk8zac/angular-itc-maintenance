import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {
  //private sub: any;
  constructor(
     //private route: ActivatedRoute,
    

  ) { }

  ngOnInit(): void {
  //this.sub = this.route.params.subscribe(params => { 
  //console.log(this.route.params.value.id);
  //});
}
  ngOnDestroy() {
   //     this.sub.unsubscribe();
}
  

}