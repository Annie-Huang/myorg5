import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UiModule } from '@myorg5/ui';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {path: '', pathMatch: 'full', component: MainComponent}
    ])
  ],
  declarations: [MainComponent]
})
export class FeatureMainModule {}
