import { Component } from '@angular/core';

@Component({
  selector: 'myorg5-root',
  template: `
    <header class="flex">
      <img src="https://nx.dev/assets/images/nx-logo-white.svg" alt="Nx logo" width="75">
      <h1>Welcome to {{title}}!</h1>
      <div style="margin: 20px; background: white;">
        <a routerLink="/about">About</a> &nbsp;
        <a routerLink="/">Items</a>
      </div>
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
}
