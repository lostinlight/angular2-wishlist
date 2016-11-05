import * as moment from 'moment/moment';
import {Component} from '@angular/core';

import {Wish} from './../wish.model';
import {FunctionalityService} from './../services/functionality.service';

@Component({
  selector: 'wl-input',
  templateUrl: 'app/wishes/wish-input.html'
})

export class WishInputComponent {
  wish = new Wish('', '', '', '', false, false, 'wish-default'); // TODO: in server-example implement adding custom image & store it in db
  categories = ['goods', 'trips', 'mates', 'bonus'];

  constructor(public functionalityService: FunctionalityService) { }

  toggleDropdown(event: any) { // TODO: close dropdown on outer mouse click
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

  onSubmit() {
    this.wish.date = moment().format('MMM D YYYY');
    this.functionalityService.addWish(this.wish);
    this.wish = new Wish('', '', '', '', false, false, 'wish-default'); // makes form pristine again
    document.getElementById('wl-new-wish__menu').classList.remove('open');
  }

}
