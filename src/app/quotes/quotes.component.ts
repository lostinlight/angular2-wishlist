import {Component} from '@angular/core';

@Component({
  selector: 'wl-quotes',
  templateUrl: 'app/quotes/quotes.html'
})

export class QuotesComponent {

  quotes: string[] = ['Impossible becomes possible when you want it bad enough',
                      'It takes as much energy to wish as it does to plan',
                      'Never stop believing that your dreams are eternal',
                      'Life is too short to be wishing for things that have been proven by many to be achievable'];
  quoteNumber: number = 0;

  changeQuote() {
    let el = document.querySelector('.wl-quote');
    let quoteQuant = this.quotes.length - 1;

    (el.classList) ? el.classList.add('wl-quote-animated') : el.className += ' ' + 'wl-quote-animated';

    (this.quoteNumber < quoteQuant) ? this.quoteNumber += 1 : this.quoteNumber = 0;

    window.setTimeout(function () {
      if (el.classList) {
        el.classList.remove('wl-quote-animated');
      } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + 'wl-quote-animated'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }, 600);

  }

}
