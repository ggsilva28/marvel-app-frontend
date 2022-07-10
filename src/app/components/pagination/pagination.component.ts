import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() total: number = 0;
  @Input() limit: number = 0;
  @Input() page: number = 0;
  @Input() disabled: boolean = false;

  @Output() onPageChange = new EventEmitter<number>();
  @Output() onLimitChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  getNextAndPreviousPages() {
    const pages = [];
    const totalPages = Math.ceil(this.total / this.limit);
    const currentPage = this.page + 1;

    for (let i = currentPage - 2; i < currentPage; i++) {
      if (i > 0) {
        pages.push(i);
      }
    }

    pages.push(currentPage);

    for (let i = currentPage + 1; i < currentPage + 3; i++) {
      if (i <= totalPages) {
        pages.push(i);
      }
    }
    
    return pages;
  }

  lastPage() {
    return Math.ceil(this.total / this.limit);
  }

  selectPage(page: number) {
    this.onPageChange.emit(page);
  }
  
  selectLimit(limit: number) {
    this.onLimitChange.emit(limit);
  }
}
