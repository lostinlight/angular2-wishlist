import {Component, OnInit} from '@angular/core';

import {Wish} from './../wish.model';
import {FilteredWishesService} from './../services/filtered-wishes.service';
import {CapitalizePipe} from './../pipes/capitalize.pipe';

@Component({
  selector: 'wl-archive',
  templateUrl: 'app/archive/archive.html',
  pipes: [CapitalizePipe]
})

export class ArchiveComponent implements OnInit {

  uWishes: Wish[];

  constructor (private filteredWishesService: FilteredWishesService) {
    filteredWishesService.update.subscribe(bool => this.uWishes = this.filteredWishesService.uWishes);
  }

  ngOnInit() {
    this.uWishes = this.filteredWishesService.uWishes;
  }

  clearWishes() {
    this.filteredWishesService.uWishes = [];
    this.uWishes = [];
  }

}
