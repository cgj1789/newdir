import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterHeroComponent } from './register-hero/register-hero.component';
import { ManagerHeroComponent } from './manager-hero/manager-hero.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: IndexComponent, children: [
      {path: 'dashboard', component: DashboardComponent}, // 전체 경로 : /admin/dashboard
      {path: 'register', component: RegisterHeroComponent},
      {path: 'manager', component: ManagerHeroComponent}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent, DashboardComponent, RegisterHeroComponent, ManagerHeroComponent]
})
export class AdminModule { }
