import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSectionComponent } from './info-section.component';

@NgModule({
  imports: [
    CommonModule,
    InfoSectionComponent
  ],
  exports: [InfoSectionComponent]
})
export class InfoSectionModule { }
