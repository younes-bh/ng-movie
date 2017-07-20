import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isNumber} from "util";

// http://jasonwatmore.com/post/2016/08/23/angular-2-pagination-example-with-logic-like-google


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() passed_total_pages: number;
  @Input() selected_page: number;
  @Output() new_page: EventEmitter<number> = new EventEmitter;
  // pager object
  pager: any = {};


  constructor() { }

  ngOnInit() {
    this.set_page(this.selected_page);
  }


  set_page(page: number) {
    if (page < 1 || page > this.pager.total_pages) {
      return;
    }
    this.selected_page = page;
    // get pager object from service
    this.pager = this.get_pager(this.passed_total_pages, page);
    this.new_page.emit(page);

  }


  get_pager(total_pages: number, current_page: number = 1) {
    let start_page: number;
    let end_page: number;
    if (total_pages <= 10) {
      // less than 10 total pages so show all
      start_page = 1;
      end_page = total_pages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (current_page <= 6) {
        start_page = 1;
        end_page = 10;
      } else if (current_page + 4 >= total_pages) {
        start_page = total_pages - 9;
        end_page = total_pages;
      } else {
        start_page = current_page - 5;
        end_page = current_page + 4;
      }
    }
    // create an array of pages to ng-repeat in the pager control
    const pages = this.range(start_page, end_page + 1);

    // return object with all pager properties required by the view
    return {
      current_page: current_page,
      total_pages: total_pages,
      start_page: start_page,
      end_page: end_page,
      pages: pages
    };
  }

  range (start: number, end: number) {
    let range_array = Array<number>();
    for (let i: number = start; i < end; i++) {
      range_array[i - start] = i;
    }
    return range_array;
  }


}
