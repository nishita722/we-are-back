import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { AboutComponent } from './Mycomponents/about/about.component';

const routes:Routes=[
  {path: '',component: TodosComponent},
  {path: 'about',component: AboutComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
