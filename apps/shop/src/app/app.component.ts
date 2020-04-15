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

      <div class="item" *ngFor="let item of items">
        <p>{{item.description}}</p>
        <button (click)="addToCart(item.code)" [attr.code]="item.code">Add to cart</button>
      </div>
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

      div.item {
        padding: 5px;
        margin: 10px 0;
        border: 1px solid grey;
        display: flex;
        justify-content: space-between;
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
