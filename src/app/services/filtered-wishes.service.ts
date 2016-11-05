import {Injectable, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import {Wish} from './../wish.model';
import {WishesService} from './wishes.service';

@Injectable()
export class FilteredWishesService {

  wishes: Wish[] = [];     // locked wishes
  uWishes: Wish[] = [];   // unlocked wishes
  aWishes: Wish[] = [];  // alpha wishes
  fWishes: Wish[] = []; // filtered by category locked wishes

  category: string = 'all';
  categorySource = new Subject<string>();
  content$ = this.categorySource.asObservable();

  update = new EventEmitter();

  constructor(private wishesService: WishesService) { }

  onWishesRetrieved() {
    this.wishesService.allWishes.forEach(item => {
       if (item.isUnlocked === false && item.isAlpha === false) {
              this.wishes = [...this.wishes, new Wish(item._id, item.name, item.date,
                                              item.category, item.isUnlocked, item.isAlpha, item.image)];
            }  else if (item.isUnlocked === false && item.isAlpha === true) {
              this.aWishes = [...this.aWishes, new Wish(item._id, item.name, item.date,
                                              item.category, item.isUnlocked, item.isAlpha, item.image)];
            } else {
              this.uWishes = [...this.uWishes, new Wish(item._id, item.name, item.date,
                                               item.category, item.isUnlocked, item.isAlpha, item.image)];
            }
    });
  }

  filterWishes() {
    this.fWishes = (this.category === 'all') ? this.wishes : (this.wishes.filter(item => item.category === this.category));
    this.update.emit(true);
    return this.fWishes;
  }

}
