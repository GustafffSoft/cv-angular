import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationSectionComponent } from './education-section.component';

@NgModule({
  imports: [
    CommonModule,
    EducationSectionComponent
  ],
  exports: [EducationSectionComponent]
})
export class EducationSectionModule { }
