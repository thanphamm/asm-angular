import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { XdtwComponent } from './xdtw/xdtw.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path:'',redirectTo:'dangnhap',pathMatch:'full'},
  {path:'main',component:MainComponent},
  {path:'xdtw/:idQuiz',component:XdtwComponent},
  {path:'dangnhap',component:DangnhapComponent},
  {path:'list',component:ListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
