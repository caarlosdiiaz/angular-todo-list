import { Component, Input } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../models/task';
import { TaskCardComponent } from "../task-card/task-card.component";

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {

  @Input() tasks: Task[] = [];
  uncompletedTasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor() {

  }

  ngOnInit() {
    this.uncompletedTasks = this.tasks.filter(task => !task.completed);
    this.completedTasks = this.tasks.filter(task => task.completed);
  }
}
