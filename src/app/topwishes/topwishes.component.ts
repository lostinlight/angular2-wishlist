import {Component, OnInit} from '@angular/core';

import {Wish} from './../wish.model';
import {FilteredWishesService} from './../services/filtered-wishes.service';
import {FunctionalityService} from './../services/functionality.service';
import {UpperCasePipe} from './../pipes/uppercase.pipe';

@Component({
  selector: 'wl-top-wishes',
  templateUrl: 'app/topwishes/topwishes.html',
  pipes: [UpperCasePipe]
})

export class TopWishesComponent implements OnInit {

  aWishes: Wish[] = [];  // alpha wishes

  constructor(private filteredWishesService: FilteredWishesService, private functionalityService: FunctionalityService) {
    filteredWishesService.update.subscribe(bool => this.aWishes = this.filteredWishesService.aWishes);
  }

  ngOnInit() {
    this.aWishes = this.filteredWishesService.aWishes;
  }

  onUnlock(wish: Wish) {
    wish.isUnlocked = true;
    this.functionalityService.unlockWish(wish);
    let el = document.getElementById('wl-top-wishes');
    el.insertAdjacentHTML( 'afterbegin',
                          `<div class="wl-wish-wrapper wl-default-wrapper">
                              <div class="wl-top-wish wl-default-wish">
                                <span>empty Alpha Wish</span>
                              </div>
                           </div>` );
  }

}
