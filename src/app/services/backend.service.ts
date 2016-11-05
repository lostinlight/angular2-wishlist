import { Injectable } from '@angular/core';

import {WISHES} from './../mock-wishes';

@Injectable()
export class BackendService {

  getAll() {
    return WISHES;
 }

}
