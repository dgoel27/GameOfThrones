import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GotService } from '../got.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
  providers: [Location]
})
export class BookViewComponent implements OnInit,OnDestroy {

  public currentBook;

  constructor(public _route: ActivatedRoute, public router: Router, public gotService: GotService, public location: Location) { 
    console.log("book-view constructor is called");
  }

  ngOnInit() {
    console.log("book-view ngOnInit called");
    let currentBookUrl = this._route.snapshot.url.toString();
    console.log('currentBookUrl : '+ currentBookUrl);
    let currentBookId = currentBookUrl.split(',')[1];
    console.log('currentBookId : '+ currentBookId);
    this.gotService.getSingleBookInformation(currentBookId).subscribe(

      data =>{
        console.log(data);
        this.currentBook = data;

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
    console.log('book-view destroyed');
  }

}
