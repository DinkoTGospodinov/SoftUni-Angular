import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Dish } from '../../types/dishes';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css'],
})
export class DishesListComponent implements OnInit {
  dishes: Dish[] | null = null;
  isLoading:boolean = true;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getDishes().subscribe((dishes) => {
      console.log(dishes);
      
      this.dishes = dishes;
      setTimeout(() =>{
        this.isLoading = false;
      },1000)
     
    });
  }
}
