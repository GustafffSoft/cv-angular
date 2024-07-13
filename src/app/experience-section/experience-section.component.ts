import { Component, OnInit } from '@angular/core';

interface Job {
  title: string;
  location: string;
  project: string;
  frontend: string;
  backend: string;
  other: string;
}

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit {
  jobs: Job[] = [
    {
      title: 'Desarrollador Full-Stack - SISINFO',
      location: 'Uruguay',
      project: 'Módulo de Asignación Aleatoria de Casos (MAAC)',
      frontend: 'Angular 17(HttpClient, TypeScript), Angular Material, HTML,CSS,Tailwind CSS',
      backend: 'Java 21, Spring Boot 3.2.3,(Spring MVC, Spring REST), Maven',
      other: 'PostgreSQL,Git'
    },
    {
      title: 'Desarrollador Full-Stack - SISINFO',
      location: 'Uruguay',
      project: 'Gestión de Equipo-SEFI',
      frontend: 'JavaScript, XML, QWeb, OWL (Odoo Web Library)',
      backend: 'Odoo 17, Python 3.10',
      other: 'PostgreSQL,Git'
    },
    {
      title: 'Desarrollador Full-Stack - SISINFO',
      location: 'Uruguay',
      project: 'Escritorio Único - PEU (Agesic)',
      frontend: 'Angular 17(HttpClient, TypeScript), Angular Material, HTML,CSS,Tailwind CSS',
      backend: 'Java 17, Spring Boot 2.7.5,(Spring MVC, Spring REST), Maven',
      other: 'PostgreSQL,Git'
    },
    {
      title: 'Desarrollador Full-Stack - SISINFO',
      location: 'Uruguay',
      project: 'Sistema de Distribución de Preinscripciones (SDP)',
      frontend: 'JSF (JavaServer Faces),JSP (JavaServer Pages),HTML/CSS,JavaScript,AJAX',
      backend: 'Java EE 8,Servlets,EJB (Enterprise JavaBeans),JPA (Java Persistence API),JAX-RS (Java API for RESTful Web Services), CDI (Contexts and Dependency Injection),Java EE Security API',
      other: 'PostgreSQL,Git, Kubernetes'
    },
    {
      title: 'Desarrollador Full-Stack - SISINFO',
      location: 'Uruguay',
      project: 'Sistema de ATE(Ampliación del Tiempo Educativo)',
      frontend: 'Angular 7(HttpClient, TypeScript), Angular Material, HTML,CSS',
      backend: 'Java 8, Spring Boot 1.5.6,(Spring MVC, Spring REST), Gradle',
      other: 'PostgreSQL,Git, Kubernetes'
    },
    {
      title: 'Desarrollador Full-Stack - SISINFO',
      location: 'Uruguay',
      project: 'RUNAEV (Registro Único Nacional de Alimentos, Empresas y Vehículos)',
      frontend: 'Angular 17(HttpClient, TypeScript), Angular Material, HTML,CSS,Tailwind CSS',
      backend: 'Java 17, Spring Boot 2.7.5,(Spring MVC, Spring REST), Maven',
      other: 'PostgreSQL,Git'
    },
    {
      title: 'Desarrollador Full-Stack - SISINFO',
      location: 'Cuba',
      project: 'CRM',
      frontend: 'JavaScript, XML, QWeb, OWL (Odoo Web Library)',
      backend: 'Odoo 8, Odoo 9, Odoo 11, Python 2.7, Python 3.5',
      other: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
