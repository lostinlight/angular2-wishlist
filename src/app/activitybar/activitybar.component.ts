import {Component, OnInit} from '@angular/core';

import {Wish} from './../wish.model';
import {LatestWishesService } from './../services/latest-wishes.service';
import {TimeTransformPipe} from './../pipes/time-transform.pipe';
import {CapitalizePipe} from './../pipes/capitalize.pipe';


@Component({
  selector: 'wl-activity-bar',
  templateUrl: 'app/activitybar/activitybar.html',
  pipes: [TimeTransformPipe, CapitalizePipe]
})

export class ActivityBarComponent implements OnInit {

  lWishes: Wish[];

  constructor(public latestWishesService: LatestWishesService) {
    latestWishesService.update.subscribe(bool => this.lWishes = this.latestWishesService.lWishes);
  }

  ngOnInit() {
    this.lWishes = this.latestWishesService.latestWishes();
  }

}
