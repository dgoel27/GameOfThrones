import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css'],
  providers: [Location]
})
export class ComingSoonComponent implements OnInit,OnDestroy {

  constructor(public location: Location) {
    console.log("coming-soon constructor is called");
   }

  ngOnInit() {
    console.log("coming-soon ngOnInit called");
  }
  
  public goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy() {
    console.log('coming-soon destroyed');
  }

}
