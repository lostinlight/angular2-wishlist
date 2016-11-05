import {Component, OnInit} from '@angular/core';

import {Wish} from './../wish.model';
import {CapitalizePipe} from './../pipes/capitalize.pipe';
import {TimeTransformPipe} from './../pipes/time-transform.pipe';
import {FilteredWishesService} from './../services/filtered-wishes.service';
import {FunctionalityService} from './../services/functionality.service';


@Component({
  selector: 'wl-wishlist',
  templateUrl: 'app/wishes/wish-list.html',
  pipes: [CapitalizePipe, TimeTransformPipe]
})

export class WishListComponent implements OnInit {

  updatingWish: Wish;
  updateMe: boolean = true; // used in template's ngSwitch to show either wish or inputs for editing that wish
  categories = ['goods', 'trips', 'mates', 'bonus'];
  fWishes: Wish[]; // filtered by category locked wishes

  constructor (private filteredWishesService: FilteredWishesService, private functionalityService: FunctionalityService) {
    filteredWishesService.content$.subscribe(
        content => {
          this.filteredWishesService.category = content;
          this.fWishes = this.filteredWishesService.filterWishes();
        });

    filteredWishesService.update.subscribe(bool => this.fWishes = this.filteredWishesService.fWishes);
  }

  ngOnInit() {
    this.fWishes = this.filteredWishesService.fWishes;
  }

  toggleDropdown(event: any) {
    let target = event.currentTarget.nextElementSibling;
    let className = 'open';

    if (target.classList) {
      target.classList.toggle(className);
    } else {
      let classes = target.className.split(' ');
      let existingIndex = classes.indexOf(className);

      if (existingIndex >= 0) {
        classes.splice(existingIndex, 1);
      } else {
        classes.push(className);
      }
      target.className = classes.join(' ');
    }
  }

  onEdit(wish: Wish, event: any) {
    this.updatingWish = wish;
    event.currentTarget.parentNode.classList.remove('open');
  }

  onUpdate(wish: Wish) {
    this.updatingWish = null;
  }

  onRemove(wish: Wish) {
    this.functionalityService.updateWishlist(wish);
  }

  onUnlock(wish: Wish) {
    wish.isUnlocked = true;
    this.functionalityService.unlockWish(wish);
  }

  onMakeAlpha(wish: Wish) {

    let checkAlphas = this.filteredWishesService.aWishes.length;

    if (checkAlphas === 4) {
      window.alert( // TODO: create html alert div instead of default alert
        `Currently you already have 4 Alpha wishes. This is the maximum ammount.

         Please, accomplish one of them, mark it as unlocked. Then add new Alpha wish`);
    } else {
        let emptyAlpha = Array.from( document.getElementsByClassName('wl-default-wrapper') )[0];

        if (emptyAlpha !== undefined) {
          let el = document.getElementById('wl-top-wishes');
          el.removeChild(emptyAlpha);
        }
        wish.isAlpha = true;
        this.functionalityService.toggleAlpha(wish);
    }
  }

}
