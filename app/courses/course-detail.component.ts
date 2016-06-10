import { Component, Input, OnInit } from '@angular/core';
import { Course } from './course';

import { CourseService } from './course.service';
import { RouteSegment } from '@angular/router';

@Component({
    selector: 'my-course-detail',
    templateUrl: 'app/courses/course-detail.component.html'
})
export class CourseDetailComponent implements OnInit {
    constructor(
        private courseService: CourseService,
        private routeSegment: RouteSegment) {
    }

    ngOnInit(){
        let id = +this.routeSegment.getParam('id');
        this.courseService.getCourse(id)
            .then(course => this.course = course);
    }

    goBack() {
        window.history.back();
    }

    //@Input()
    course: Course;
}