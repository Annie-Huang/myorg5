import { Component } from '@angular/core';

@Component({
  selector: 'myorg5-root',
  template: `
    <header class="flex">
      <img src="https://nx.dev/assets/images/nx-logo-white.svg" alt="Nx logo" width="75">
      <h1>Welcome to {{title}}!</h1>
    </header>
    <main>
      <div class="cart">
        {{cart.length}} items in the cart
      </div>

      <myorg5-item-list [items]="items" (addToCart)="addToCart($event)"></myorg5-item-list>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  styles: [
    `
      div.cart {
        padding: 5px;
        margin: 10px 0;
        background-color: lightblue;
      }
    `
  ]
})
export class AppComponent {
  title = 'shop';
  items = [
    {
      code: 'blanket',
      description: 'weight blanket'
    },
    {
      code: 'pillow',
      description: 'large soft pillow'
    },
    {
      code: 'mattress',
      description: 'queen size firm mattress'
    },
  ];

  cart = [];

  addToCart(code: string) {
    this.cart.push(code);
  }
}
