import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('input') input: ElementRef;
  tasks = [];

  cleanInput() {
    this.input.nativeElement.value = '';
  }

  addTask(title: string) {
    this.tasks.push({ title });
    this.cleanInput();
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  removeAll() {
    this.tasks.splice(0);
  }

  toggleAll() {
    const value = this.tasks.some(task => !task.checked);
    this.tasks.forEach(task => task.checked = value);
  }
}
