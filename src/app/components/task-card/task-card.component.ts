import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../service/task.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
})
export class TaskCardComponent {
  @Input() task: Task = new Task();
  @Output() tasksModifieds = new EventEmitter();

  constructor(private data: TaskService) {}

  deleteTask(id: number) {
    Swal.fire({
      title: `Do you hwant to delete de task ${this.task.title}?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.data.deleteTask(id);
        this.tasksModifieds.emit();
        Swal.fire({
          title: 'Deleted!',
          text: `The task ${this.task.title} has been deleted.`,
          icon: 'success',
        });
      }
    });
  }

  completeTask(id: number) {
    this.data.completeTask(id);
    this.tasksModifieds.emit();
    Swal.fire({
      title: "Good job!",
      text: `You have finished the task ${this.task.title}!`,
      icon: "success"
    });
  }
}
