import {Injectable, EventEmitter} from '@angular/core';

import {Wish} from './../wish.model';
import {WishesService} from './wishes.service';

@Injectable()
export class LatestWishesService {

  lWishes: Wish[] = [];    // latest wishes
  update = new EventEmitter();

  constructor(private wishesService: WishesService) { }

  latestWishes() {
    let lEnd = this.wishesService.allWishes.length;
    let lStart = lEnd - 4;
    this.lWishes = this.wishesService.allWishes.slice(lStart, lEnd);
    this.update.emit(true);
    return this.lWishes;
  }

}
