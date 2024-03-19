import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css'],
})
export class AddDishComponent {
  
  constructor(private apiService: ApiService) {}
  
  addDish(ev:Event,dishTitle: string, postIngredients: string, postSteps: string) {
    ev.preventDefault();
    this.apiService
      .createDish(dishTitle, postIngredients, postSteps)
      .subscribe((data) => {
        
        console.log(data);
      });
  }

}
