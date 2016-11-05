import {Component} from '@angular/core';
import {FilteredWishesService} from './../services/filtered-wishes.service';

@Component({
  selector: 'wl-sidebar',
  templateUrl: 'app/sidebar/sidebar.html'
})

export class SidebarComponent {

  constructor (public filteredWishesService: FilteredWishesService) {}

  filterByCategory(category: string, event: any) {
    let activeLi = event.currentTarget.parentNode.tagName.toLowerCase();
    let el = event.currentTarget.parentNode;
    let els = Array.from( document.querySelectorAll('.wl-sidebar__item') );

    this.filteredWishesService.categorySource.next(category);

    els.forEach((item) => {
      if (item.classList) {
        item.classList.remove('active');
      } else {
        item.className = item.className.replace(new RegExp('(^|\\b)' + 'active'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    });

    if (activeLi === 'li') {
      if (el.classList) {
        el.classList.add('active');
      } else {
        el.className += ' ' + 'active';
      }
    }

  }

}
