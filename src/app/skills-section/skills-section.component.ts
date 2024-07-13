import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  skills = [
    { name: 'Angular', icon: 'https://img.icons8.com/color/48/000000/angularjs.png' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/48/000000/typescript.png' },
    { name: 'Java', icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png' },
    { name: 'Spring Boot', icon: 'https://img.icons8.com/color/48/000000/spring-logo.png' },
    { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/48/000000/postgresql.png' }
  ];
}
