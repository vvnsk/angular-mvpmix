import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent implements OnInit {

  dealList;

  constructor(public http: HttpClient) {
    // Call every 30 sec
    this.dealList = timer(0, 10000).pipe(
      switchMap(() => {
        return http.get('/assets/deals.json');
      })
    );

    // Call Once
    /* this.dealList = http.get('/assets/deals.json')
    .pipe(
      retry(3)
    ); */

    /**
     * NOTES:
     * Bubble Diagram in RX JS
     * Map, SwitchMap(for observables)
     *
     * Strams, cache those streamsin pipes
     *
     * HTTP Interceptions(auth and other common headers)
     */
  }

  ngOnInit() {}
}
