import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoAppComponent } from "./components/todo-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoAppComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'todo-list';
}
