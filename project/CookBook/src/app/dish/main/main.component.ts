import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isLoading :boolean= false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 1000);
  }
}
