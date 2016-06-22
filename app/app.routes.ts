import { provideRouter, RouterConfig } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonsComponent } from './person/persons.component';

export const routes: RouterConfig = [
    { path: '', component: DashboardComponent },
    { path: 'detail/:id', component: CourseDetailComponent },
    { path: 'detail', component: CourseDetailComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'persons', component: PersonsComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];