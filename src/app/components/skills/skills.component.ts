import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  readonly skillGroups: SkillGroup[] = [
    {
      category: 'Backend',
      skills: ["Java 8-17", "Kotlin", "Spring Boot", "Spring Data JPA", "Spring Batch", "Spring LDAP", "REST", "Microservices"]
    },
    {
      category: 'Frontend',
      skills: ["Angular", "TypeScript", "Bootstrap", "Material Design", "Tailwind", "HTML/CSS"]
    },
    {
      category: 'Architecture',
      skills: ["DDD", "Clean Architecture", "Microservices", "KISS", "DRY", "SOLID"]
    },
    {
      category: 'Cloud & DevOps',
      skills: ['Cloud Foundry', 'Concourse CI', 'Jenkins', 'Docker', 'CI/CD'],
    },
    {
      category: 'Qualité',
      skills: ['TDD', 'JUnit', 'Selenium', 'SonarQube', 'Clean Code', 'Software Craftsmanship'],
    },
    {
      category: 'Data',
      skills: ["SQL Oracle", "PostgreSQL", "MySQL", "SQLServer"]
    },
  ];
}
