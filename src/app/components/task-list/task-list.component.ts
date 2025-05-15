import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../models/task';
import { TaskCardComponent } from "../task-card/task-card.component";

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnChanges {

  @Input() tasks: Task[] = [];
  uncompletedTasks: Task[] = [];
  completedTasks: Task[] = [];
  @Output() taskModifieds = new EventEmitter<void>();

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tasks']) {
      this.uncompletedTasks = this.tasks.filter(task => !task.completed);
      this.completedTasks = this.tasks.filter(task => task.completed);
    }
  }

  ngOnInit() {
    this.uncompletedTasks = this.tasks.filter(task => !task.completed);
    this.completedTasks = this.tasks.filter(task => task.completed);
  }

  onTaskModifieds() {
    this.taskModifieds.emit();
  }
}
