import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task{
  id: number,
  tarea: string
}

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {

  tasks:Task[] = [];
  newTask:Task = {
    id: 0,
    tarea: ''
  };
  taskToUpdate: Task | null = null;

  addTarea(): boolean{
    if(!this.newTask?.tarea.trim()) return false;
    this.tasks.push(this.newTask);
    this.reset();
    return true;
  }

  reset(){
    this.newTask={
      id:0,
      tarea:''
    }
    this.taskToUpdate = {
      id:0,
      tarea:''
    }
  }

  updateTarea() {
    // Encontramos el índice de la tarea que queremos actualizar
    const index = this.tasks.findIndex(task => task.id === this.taskToUpdate?.id);

    if (index !== -1) {
      const input = document.getElementById('tareaUpdate') as HTMLInputElement;
      this.tasks[index].tarea = input.value;
      this.reset();
    }
    console.log(this.tasks);
  }

  editTarea(taskId: number) {
    // Encontramos la tarea a editar
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      this.taskToUpdate = task;
      this.newTask = { ...task }; // Rellenamos el input con los datos de la tarea a actualizar
    }

  }

  deleteTarea(taskId: number) {
    const index = this.tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
