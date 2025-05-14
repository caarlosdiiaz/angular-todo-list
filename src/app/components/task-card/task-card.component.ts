import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html'
})
export class TaskCardComponent {

  @Input() task: Task = new Task();
}
