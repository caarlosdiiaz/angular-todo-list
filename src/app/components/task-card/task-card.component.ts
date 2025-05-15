import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../service/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html'
})
export class TaskCardComponent {

  @Input() task: Task = new Task();
  @Output() tasksModifieds = new EventEmitter();

  constructor(private data: TaskService) { }

  deleteTask(id: number) {
    this.data.deleteTask(id);
    this.tasksModifieds.emit();
  }

  completeTask(id: number) {
    this.data.completeTask(id);
    this.tasksModifieds.emit();
  }
}
