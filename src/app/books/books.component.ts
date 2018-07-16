import { Component, OnInit, OnDestroy } from '@angular/core';
import { GotService } from '../got.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit,OnDestroy {

  public allBooks;

  constructor(public gotService: GotService) {
    console.log('Books component constructor');
   }

  ngOnInit() {
    console.log('Books component initialized');
    this.allBooks = this.gotService.getBooks().subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.allBooks = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
    console.log(this.allBooks);
  }

  onDeactivate() {
    document.body.scrollTop = 0;
}

  ngOnDestroy() {
    console.log('Books component destroyed');
  }

}
