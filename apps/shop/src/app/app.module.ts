import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from '@myorg5/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
