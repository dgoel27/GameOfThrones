import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GotService } from '../got.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css'],
  providers: [Location]
})
export class HouseViewComponent implements OnInit,OnDestroy {

  public currentHouse;

constructor(public _route: ActivatedRoute, public router: Router, public gotService: GotService, public location: Location) { 
    console.log("house-view constructor is called");
  }

  ngOnInit() {
    console.log("house-view ngOnInit called");
    let currentHouseUrl = this._route.snapshot.url.toString();
    console.log('currentHouseUrl : '+currentHouseUrl);
    let currentHouseId = currentHouseUrl.split(',')[1];
    console.log('currentHouseId : '+ currentHouseId);
    this.gotService.getSingleHouseInformation(currentHouseId).subscribe(

      data =>{
        console.log(data);
        this.currentHouse = data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy() {
    console.log('house-view destroyed');
  }

}
