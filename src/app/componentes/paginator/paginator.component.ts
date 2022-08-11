import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() actualPage: any;
  @Input() totalPages: any;
  @Output() changePage = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  selectPage(index:number){
    this.changePage.emit(index)
  }

}
