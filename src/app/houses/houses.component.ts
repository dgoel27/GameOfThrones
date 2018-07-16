import { Component, OnInit, OnDestroy } from '@angular/core';
import { GotService } from '../got.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit,OnDestroy {

  public allHouses;

  constructor(public gotService: GotService) {
    console.log('Houses component constructor');
   }

  ngOnInit() {
    console.log('Houses component initialized');
    this.allHouses = this.gotService.getHouses().subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.allHouses = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
    console.log(this.allHouses);
  }

  onDeactivate() {
    document.body.scrollTop = 0;
}

  ngOnDestroy() {
    console.log('Houses component destroyed');
  }
}
