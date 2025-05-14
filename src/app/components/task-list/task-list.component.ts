import { Component, Input } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
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
