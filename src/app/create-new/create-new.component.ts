import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  private sub: any;
  constructor(
    
    private route: ActivatedRoute,
  ) { }

ngOnInit(): void {
  this.sub = this.route.params.subscribe(params => { 
  //console.log(this.route.params);
  });
}

ngOnDestroy() {
        this.sub.unsubscribe();
    }

}