import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { CourseService } from './courses/course.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
  <a [routerLink]="['/']">Dashboard</a>
  <a [routerLink]="['/courses']">Courses</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    CourseService
  ],
  styleUrls: ['app/app.component.css']
})
@Routes([
  { path: '/', component: DashboardComponent },
  { path: '/courses/:id', component: CourseDetailComponent},
  { path: '/courses', component: CoursesComponent }
]
)
export class AppComponent {
  title = 'Course Registration';
}


