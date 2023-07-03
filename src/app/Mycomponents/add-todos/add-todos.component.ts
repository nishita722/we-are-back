import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent {
  title:string;
  desc:string;
  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter<Todo>;
  constructor(){};
  onSubmit(){
    const todo={
      sno:4,
      title:this.title,
      desc:this.desc,
      active:true      
    }
    this.todoAdd.emit(todo);

  }
}
