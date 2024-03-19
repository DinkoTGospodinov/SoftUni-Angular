import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-current-dish',
  templateUrl: './current-dish.component.html',
  styleUrls: ['./current-dish.component.css']
})
export class CurrentDishComponent implements OnInit{

  constructor(private api: ApiService) {}
 
  ngOnInit(): void {
    this.api.getSingleDish('3987279d-0ad4-4afb-8ca9-5b256ae3b298') 
  }
 
}
