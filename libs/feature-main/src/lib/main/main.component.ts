import { Component } from '@angular/core';

@Component({
  selector: 'myorg5-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
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
