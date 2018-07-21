import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterHeroComponent } from './register-hero/register-hero.component';
import { ManagerHeroComponent } from './manager-hero/manager-hero.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AdminService} from './admin.service';

const routes: Routes = [
  { path: '', component: IndexComponent, children: [
      {path: '', component: DashboardComponent}, // 전체 경로 : /admin/dashboard
      {path: 'register', component: RegisterHeroComponent},
      {path: 'manager', component: ManagerHeroComponent}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent, DashboardComponent, RegisterHeroComponent, ManagerHeroComponent],
  providers: [AdminService],
  // provider는 서비스가 AdminModule을 호출하는 시점이고 이게 lazy loading이면 늦게 로딩된다.
})
export class AdminModule { }
