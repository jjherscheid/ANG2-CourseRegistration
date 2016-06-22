import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { CourseService } from './courses/course.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PersonsService } from './person/person.service';
import { PersonsComponent } from './person/persons.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
  <a [routerLink]="['/']">Dashboard</a>
  <a [routerLink]="['/courses']">Courses</a>
  <a [routerLink]="['/persons']">Persons</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    CourseService,
    PersonsService
  ],
  styleUrls: ['app/app.component.css']
})
@Routes([
  { path: '/', component: DashboardComponent },
  { path: '/detail/:id', component: CourseDetailComponent },
  { path: '/detail', component: CourseDetailComponent },
  { path: '/courses', component: CoursesComponent },
  { path: '/persons', component: PersonsComponent }
]
)
export class AppComponent {
  title = 'Course Registration';
}


