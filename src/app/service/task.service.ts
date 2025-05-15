import { Injectable } from '@angular/core';
import { Task } from '../models/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];

  constructor() { }

  findAll(): Task[] {
    this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : [];
    return this.tasks;
  }

  addTask(t: Task): void {
    const tasks = this.findAll();
    t.id = tasks.length + 1;
    tasks.push(t);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  findById(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id)
  }

  completeTask(id: number) {
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(this.tasks.map(t => {
      if (t.id === id) {
        t.completed = !t.completed;
      }
      return t;
    })));
  }

  deleteTask(id: number) {
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(this.tasks.filter(t => t.id !== id)));
  }
}
