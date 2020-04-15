import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from '@myorg5/ui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@myorg5/feature-main').then(
            module => module.FeatureMainModule
          )
      },
      {
        path: 'about',
        loadChildren: () =>
          import('@myorg5/feature-about').then(
            module => module.FeatureAboutModule
          )
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
