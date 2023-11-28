import { Component } from '@angular/core';

@Component({
  selector: 'test-mellow-hellow-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-mellow-hellow';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
