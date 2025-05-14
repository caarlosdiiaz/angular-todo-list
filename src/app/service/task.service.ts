import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { tasks_data } from '../data/task.data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  findAll(): Task[] {
    return tasks_data;
  }

  findById(id: number): Task | undefined {
    return tasks_data.find(task => task.id === id);
  }
}
