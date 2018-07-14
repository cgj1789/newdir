import { Component, OnInit } from '@angular/core';
import {TodoVo} from '../domain/todo.vo';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: TodoVo[];
  // 신규 할일 (new로 객체를 선언하지 않으면 undefined이 된다)
  newTodo = new TodoVo();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.heroService.getTodoList()
      .subscribe(body => {
        console.log(body);
        this.todoList = body;
      });
  }

  // this.newTodo로 데이터를 보내면 todo 이외에 나머지 멤버는 어떻게 될까?
  addTodo() {
    this.heroService.addTodo(this.newTodo)
      .subscribe(body => {
        console.log(body);
        this.todoList.unshift(body);
      });
  }
}
