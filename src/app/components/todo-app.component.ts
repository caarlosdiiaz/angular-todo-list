import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../models/task';
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: 'todo-app',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './todo-app.component.html'
})
export class TodoAppComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.tasks = this.service.findAll();
  }
}
