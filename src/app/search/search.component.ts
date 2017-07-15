import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  submit_search(event, form_data) {
    let query = form_data.value['q'];
    if (query) {
      this._router.navigate(['/search', {q: query}]);
    }

  }
}
