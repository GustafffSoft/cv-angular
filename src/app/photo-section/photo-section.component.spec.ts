import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSectionComponent } from './photo-section.component';

describe('PhotoSectionComponent', () => {
  let component: PhotoSectionComponent;
  let fixture: ComponentFixture<PhotoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
