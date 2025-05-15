import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../service/task.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'create-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-modal.component.html'
})
export class CreateModalComponent {

  constructor(private data: TaskService) {}

  newTask: Task = new Task();
  @Output() closeEventEmiter = new EventEmitter();
  @Output() taskCreated = new EventEmitter();

  createNewTask(taskForm: NgForm) {
  if (taskForm.valid) {
    if (typeof this.newTask.dueDate === 'string') {
      this.newTask.dueDate = new Date(this.newTask.dueDate);
    }
    this.newTask.completed = false;
    this.data.addTask(this.newTask);
    this.taskCreated.emit();
    this.closeModal();
  }
}

  closeModal() {
    this.closeEventEmiter.emit();
  }
}
