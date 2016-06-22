import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CourseService } from './courses/course.service';
import { PersonsService } from './person/person.service';

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
    CourseService,
    PersonsService
  ],
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Course Registration';
}


