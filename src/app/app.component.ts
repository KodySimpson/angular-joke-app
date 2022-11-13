import { Component } from '@angular/core';
import {JokeService} from "./services/joke.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentView: string = 'generator'; // generator or history
  currentJoke: string | undefined;
  jokeHistory: string[] = [];
  loading: boolean = false;

  constructor(private jokeService: JokeService) {}

  getRandomJoke() {
    // Use the service to get a random joke. It returns an `Observable` so we need to subscribe to it.
    // The `subscribe` method takes a callback function that will be called when the `Observable` emits a value.
    // Once the `Observable` emits a value, since we are subscribed to it, we can grab the joke and do stuff with it.
    this.loading = true;
    this.jokeService.getRandomJoke().subscribe(joke => {
      this.currentJoke = joke.value; // this is the joke
      this.jokeHistory.push(joke.value); // Add the joke to the history
      this.loading = false;
    });
  }

  clearHistory() {
    this.jokeHistory = [];
  }

  switchView(view: string) {
    this.currentView = view;
  }

}
