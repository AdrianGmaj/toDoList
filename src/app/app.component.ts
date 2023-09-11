import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toDoList';

  tasks: Array<string> = []
  doneTasks: Array<string> = []
  newTask: string = ''

  add(task: string) {
    if (this.newTask.length>0){
    this.tasks.unshift(task)
    console.log(task)
    this.newTask =''
  }}

  remove(task: string) {
    this.tasks = this.tasks.filter((e) => e != task)
  }

  done(task: string) {
    this.doneTasks.push(task);
    this.remove(task)
  }
}
