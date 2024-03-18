import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentDishComponent } from './current-dish/current-dish.component';
import { DishRoutingModule } from './dish-routing.module';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AddDishComponent,
    CurrentDishComponent,
    DishesListComponent,
    MainComponent,
  ],
  imports: [CommonModule, DishRoutingModule, SharedModule],
})
export class DishModule {}
