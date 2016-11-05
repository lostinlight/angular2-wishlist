import {Injectable} from '@angular/core';

import {Wish} from './../wish.model';
import {BackendService} from './backend.service';

@Injectable()
export class WishesService {

  allWishes: Wish[] = [];

  constructor(private backend: BackendService) { }

  getWishes() {
    let all = this.backend.getAll();
      all.forEach(item => {
        this.allWishes.push(new Wish(item._id, item.name, item.date,
                                              item.category, item.isUnlocked, item.isAlpha, item.image) );
      });
    return this.allWishes;
  }

}
