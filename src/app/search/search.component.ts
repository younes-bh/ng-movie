import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switch';



import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search_query = '';

  constructor(private _router: Router, private el: ElementRef) { }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 3) // filter out if empty
      .debounceTime(500) // only once every 500ms
      .subscribe((query: string) => {
        this._router.navigate(['/search', {q: query}]);
      });
  }

  submit_search(event, form_data) {
    let query = form_data.value['q'];
    if (query) {
      this._router.navigate(['/search', {q: query}]);
    }
    this.search_query = '';
  }
}


