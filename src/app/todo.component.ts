import { Component, OnInit } from '@angular/core';
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  todos: any[];
  newTodo: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(
        data => this.todos = data.slice(0, 5),
        err => console.error(err)
      )
  }

  toggleCompleted(todo){
    todo.completed = !todo.completed;
  }

  addTodo(){
    // only add if text has been entered
    if (this.newTodo){
      this.todos.push({
        title: this.newTodo,
        completed: false
      });
      // clear input for next new todo
      this.newTodo = '';
    }
  }

}
