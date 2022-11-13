import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {

  @Input() currentJoke: string | undefined;
  @Input() loading: boolean = false;
  @Output() switchViewEmitter = new EventEmitter<string>();
  @Output() getRandomJokeEmitter = new EventEmitter<void>();

  constructor() { }

  switchView(view: string) {
    this.switchViewEmitter.emit(view);
  }

  generateJoke() {
    this.getRandomJokeEmitter.emit();
  }

}
