import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css']
})
export class HistoryTableComponent {

  @Input() jokeHistory: string[] = [];
  @Output() switchViewEmitter = new EventEmitter<string>();
  @Output() clearHistoryEmitter = new EventEmitter<void>();

  constructor() { }

  switchView(view: string) {
    this.switchViewEmitter.emit(view);
  }

  clearHistory() {
    this.clearHistoryEmitter.emit();
  }

}
