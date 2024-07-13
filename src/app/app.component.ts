import { Component } from '@angular/core';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { HeaderModule } from './header/header.module';
import { PhotoSectionModule } from './photo-section/photo-section.module';
import { InfoSectionModule } from './info-section/info-section.module';
import { ExperienceSectionModule } from './experience-section/experience-section.module';
import { EducationSectionModule } from './education-section/education-section.module';
import { SkillsSectionModule } from './skills-section/skills-section.module';
import { FooterModule } from './footer/footer.module';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderModule,
    PhotoSectionModule,
    InfoSectionModule,
    ExperienceSectionModule,
    EducationSectionModule,
    SkillsSectionModule,
    FooterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-cv';
}
