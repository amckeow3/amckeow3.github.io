import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit {
  title ="portolio";
  isCollapsed = true;

  ngOnInit(): void {
      
  }
}
