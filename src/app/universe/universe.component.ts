import { Component, OnInit, OnDestroy } from '@angular/core';
import { GotService } from '../got.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/concat';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})
export class UniverseComponent implements OnInit,OnDestroy {

  public universe: Observable<any>[] = [];

  constructor(public gotService: GotService) {
    console.log('Universe component constructor');
   }

  ngOnInit() {
    console.log('Universe component initialized');
    this.gotService.getBooks().subscribe(

      data => {
        console.log(data);
        console.log('All Books Data -->');
        this.universe = this.universe.concat(data);
        console.log(this.universe);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );

    this.gotService.getHouses().subscribe(

      data => {
        console.log('All Houses data -->');
        this.universe = this.universe.concat(data);
        console.log(this.universe);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );

    this.gotService.getCharacters().subscribe(

      data => {
        console.log('All Characters Data -->');
        this.universe = this.universe.concat(data);
        console.log(this.universe);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );

    console.log(this.universe);
  }

  ngOnDestroy() {
    console.log('Universe component destroyed');
  }

}
