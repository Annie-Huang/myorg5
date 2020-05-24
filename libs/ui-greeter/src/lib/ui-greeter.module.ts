import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    GreeterComponent
  ],
  declarations: [GreeterComponent]
})
export class UiGreeterModule {}
