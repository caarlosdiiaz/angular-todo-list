import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../models/task';
import { TaskListComponent } from "./task-list/task-list.component";
import { CreateModalComponent } from './create-modal/create-modal.component';
import { find } from 'rxjs';

@Component({
  selector: 'todo-app',
  standalone: true,
  imports: [TaskListComponent, CreateModalComponent],
  templateUrl: './todo-app.component.html'
})
export class TodoAppComponent implements OnInit {

  tasks: Task[] = [];
  showModal: boolean = false;

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.tasks = this.service.findAll();
  }

  openCloseModal() {
    this.showModal = !this.showModal;
    this.findAll();
  }

  onTaskModified() {
    this.findAll();
  }
}
