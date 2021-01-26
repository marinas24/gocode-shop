import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gocode-shop';
  text = "";
  
  onBtnClick(): void {
    this.text = this.text ? '' : this.text = "Good job"
  }
}

