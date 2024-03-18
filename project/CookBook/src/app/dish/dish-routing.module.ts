import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { AddDishComponent } from './add-dish/add-dish.component';
import { MainComponent } from './main/main.component';
import { CurrentDishComponent } from './current-dish/current-dish.component';

const routes: Routes = [
  {
    path: 'dishes',
    children: [
      {path:'', pathMatch:'full', component:MainComponent},
      {path:':dishID', component:CurrentDishComponent}
    ]
  },
  {
    path: 'add-dish',
    component: AddDishComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishRoutingModule {}
