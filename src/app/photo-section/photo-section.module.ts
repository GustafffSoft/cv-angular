import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoSectionComponent } from './photo-section.component';

@NgModule({
  imports: [CommonModule,PhotoSectionComponent],
  exports: [PhotoSectionComponent]})
export class PhotoSectionModule { }
