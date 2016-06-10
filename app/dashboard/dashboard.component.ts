import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../courses/course';
import { CourseService } from '../courses/course.service';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    courses: Course[] = [];

    constructor(
        private router: Router,
        private courseService: CourseService
        ) {}

    ngOnInit() {
        this.courseService.getCourses()
            .then(courses => this.courses = courses.slice(1,5));
    }

    gotoDetail(course: Course) {
        let link = ['courses', course.id];
        this.router.navigate(link);
    }
}