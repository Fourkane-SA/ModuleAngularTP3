import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConsultActiviteComponent } from './consult-activite/consult-activite.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  {
    path: 'index.html',
    component: HomeComponent 
  },
  {
    path: 'about',
    component: AboutComponent 
  },
  {
    path: 'consultAct',
    component: ConsultActiviteComponent 
  },
  {
    path: 'consultAct/:id1',
    component: ConsultActiviteComponent 
  },
  {
    path: 'consultAct/:id1/:id2',
    component: ConsultActiviteComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
