import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The World of Angular';
  toggleHeader = false;
  @Input()
  menuclicked = false


  open(event){
  this.toggleHeader= !this.toggleHeader;

  }
}


