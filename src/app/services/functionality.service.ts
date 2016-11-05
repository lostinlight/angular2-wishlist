import { Injectable } from '@angular/core';

import {Wish} from './../wish.model';
import {WishesService} from './wishes.service';
import {FilteredWishesService} from './filtered-wishes.service';
import {LatestWishesService} from './latest-wishes.service';

@Injectable()
export class FunctionalityService {

  constructor(private wishes_S: WishesService, private filtered_S: FilteredWishesService,
              private latest_S: LatestWishesService) { }

  addWish(wish: Wish) {
    this.wishes_S.allWishes = [...this.wishes_S.allWishes, wish]; // update all wishes
    this.filtered_S.wishes = [...this.filtered_S.wishes, wish];
    this.filtered_S.filterWishes(); // update wishlist & archive & alpha
    this.latest_S.latestWishes(); // update activity bar
  }

  updateWishlist(wish: Wish) {
    let i = this.filtered_S.wishes.indexOf(wish);
    this.filtered_S.wishes = [...this.filtered_S.wishes.slice(0, i),
                                         ...this.filtered_S.wishes.slice(i + 1)];
    this.filtered_S.filterWishes(); // update wishlist & archive & alpha
  }

  unlockWish(wish: Wish) {
    if (wish.isAlpha === false) {
      let i = this.filtered_S.wishes.indexOf(wish);
      this.filtered_S.wishes = [...this.filtered_S.wishes.slice(0, i),
                                           ...this.filtered_S.wishes.slice(i + 1)];
    } else {
      let i = this.filtered_S.aWishes.indexOf(wish);
      this.filtered_S.aWishes = [...this.filtered_S.aWishes.slice(0, i),
                                            ...this.filtered_S.aWishes.slice(i + 1)];
    }

    this.filtered_S.filterWishes(); // update wishlist & archive & alpha
    this.filtered_S.uWishes = [...this.filtered_S.uWishes, wish];
  }

  toggleAlpha(wish: Wish) {

    if (wish.isAlpha === true) {
      let i = this.filtered_S.wishes.indexOf(wish);
      this.filtered_S.wishes = [...this.filtered_S.wishes.slice(0, i),
                                           ...this.filtered_S.wishes.slice(i + 1)];
      this.filtered_S.aWishes = [...this.filtered_S.aWishes, wish];
    } else {
      let i = this.filtered_S.aWishes.indexOf(wish);
      this.filtered_S.aWishes = [...this.filtered_S.aWishes.slice(0, i),
                                            ...this.filtered_S.aWishes.slice(i + 1)];
      this.filtered_S.wishes = [...this.filtered_S.wishes, wish];
    }

    this.filtered_S.filterWishes(); // update wishlist & archive & alpha
  }

}
