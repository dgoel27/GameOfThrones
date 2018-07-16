import { Component, OnInit, OnDestroy } from '@angular/core';
import { GotService } from '../got.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(public gotService: GotService) {
    console.log('Home component constructor');
   }

  ngOnInit() {
    console.log('Home component initialized');
  }

  onDeactivate() {
    document.body.scrollTop = 0;
}

  ngOnDestroy() {
    console.log('Home component destroyed');
  }

}
