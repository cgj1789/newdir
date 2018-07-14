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
  // 취소시 복원하기 위한 원본 데이터 저장소
  tempTodoList = new Map<number, TodoVo>();

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

  save(todo: TodoVo) {
    todo.isEdited = true;
    // 원본 데이터 저장
    // Object.assign({}, todo); // es5
    const tempTodo = {...todo}; // es6
    this.tempTodoList.set(todo.todo_id, tempTodo);
  }

  restore(todo: TodoVo) {
    const tempTodo = this.tempTodoList.get(todo.todo_id);
    Object.assign(todo, tempTodo);
    todo.isEdited = false;
  }
}
