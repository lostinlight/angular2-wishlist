import {Component, OnInit} from '@angular/core';

import {BackendService} from './services/backend.service';
import {WishesService} from './services/wishes.service';
import {FilteredWishesService} from './services/filtered-wishes.service';
import {LatestWishesService} from './services/latest-wishes.service';
import {FunctionalityService} from './services/functionality.service';

import {SidebarComponent} from './sidebar/sidebar.component';
import {ActivityBarComponent} from './activitybar/activitybar.component';
import {QuotesComponent} from './quotes/quotes.component';
import {TopWishesComponent} from './topwishes/topwishes.component';
import {ArchiveComponent} from './archive/archive.component';
import {WishListComponent} from './wishes/wishlist.component';
import {WishInputComponent} from './wishes/wish-input.component';

@Component({
  selector: 'wl-app',
  templateUrl: 'app/app.html',
  providers: [BackendService, WishesService, FilteredWishesService, LatestWishesService, FunctionalityService],
  directives: [SidebarComponent, ActivityBarComponent, QuotesComponent, TopWishesComponent,
               WishListComponent, WishInputComponent, ArchiveComponent]

})

export class AppComponent implements OnInit {

  constructor (public wishesService: WishesService, public filteredWishesService: FilteredWishesService,
               public latestWishesService: LatestWishesService) {}

  ngOnInit() {
    this.wishesService.getWishes();
    this.filteredWishesService.onWishesRetrieved();
    this.filteredWishesService.filterWishes();
  }


}
