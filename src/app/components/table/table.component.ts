import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() keys: string[] = [];
  @Input() data: Record<string, any>[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
