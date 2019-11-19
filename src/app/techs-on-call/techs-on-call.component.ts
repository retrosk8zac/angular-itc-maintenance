import { Component, OnInit } from '@angular/core';
import { techs } from '../techs';


@Component({
  selector: 'app-techs-on-call',
  templateUrl: './techs-on-call.component.html',
  styleUrls: ['./techs-on-call.component.css']
})
export class TechsOnCallComponent implements OnInit {
  techs = techs;
  constructor() { }

  ngOnInit() {
  }

}