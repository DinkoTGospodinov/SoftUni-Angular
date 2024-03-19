import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Dish } from 'src/app/types/dishes';

@Component({
  selector: 'app-current-dish',
  templateUrl: './current-dish.component.html',
  styleUrls: ['./current-dish.component.css'],
})
export class CurrentDishComponent implements OnInit {
  dish = {} as Dish;
  constructor(private api: ApiService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['dishID'];
      this.api.getSingleDish(id).subscribe((dish) => {
        this.dish = dish;
      });
    });
  }
}
