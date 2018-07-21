import { Component, OnInit } from '@angular/core';
import {TodoVo} from '../domain/todo.vo';
import {HeroService} from '../hero.service';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translate(0, 0)'})),
      transition('void => in', [
        style({opacity: 0, transform: 'translate(-100%, 0)'}),
        animate(300)
      ]),
      transition('in => void', [
        // animate(300, style({opacity: 0, transform: 'translate(100%, 0)'}))
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-50px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ]),
    ])
  ]
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
    // Object.assign({}, todo); // es5 방식
    const tempTodo = {...todo}; // es6 방식
    this.tempTodoList.set(todo.todo_id, tempTodo);
  }

  restore(todo: TodoVo) {
    const tempTodo = this.tempTodoList.get(todo.todo_id);
    Object.assign(todo, tempTodo);
    // const a = {...todo, ...tempTodo}; es6 방식
    todo.isEdited = false;
  }

  modifyTodo(todo: TodoVo) {
    this.heroService.modifyTodo(todo)
      .subscribe(body => {
        console.log(body);
        // 수정된 데이터를 모델에 반영
        Object.assign(todo, body);
        // 일반템플릿으로 전환
        todo.isEdited = false;
      });
  }

  removeTodo(todo: TodoVo) {
    const result = confirm('삭제하시겠습니까?');
    if (result) {
      this.heroService.removeTodo(todo.todo_id)
        .subscribe(body => {
          console.log(body);
          if (body.result === 0) {
            // 성공
            // 1) findIndex로 인덱스를 찾은 후 splice(index, 1); 삭제 로직
            const index = this.todoList.findIndex(item => item.todo_id === todo.todo_id ? true : false);
            this.todoList.splice(index, 1);
          }
        });
    }
  }
}
