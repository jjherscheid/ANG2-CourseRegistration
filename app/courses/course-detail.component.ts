import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Course } from './course';

import { CourseService } from './course.service';
import { RouteSegment } from '@angular/router';

@Component({
    selector: 'my-course-detail',
    templateUrl: 'app/courses/course-detail.component.html'
})
export class CourseDetailComponent implements OnInit {
    @Input() course: Course;
    @Output() close = new EventEmitter();
    constructor(
        private courseService: CourseService,
        private routeSegment: RouteSegment) {
    }

    private navigated :boolean;
    private error: any;

    ngOnInit(){
        if (this.routeSegment.getParam('id')) {
            this.navigated = true;
            let id = +this.routeSegment.getParam('id');
            this.courseService.getCourse(id)
                .then(course => this.course = course);
        }
        else{
            this.navigated = false;
            this.course = new Course();
        }
    }

    save() {
        this.courseService
            .save(this.course)
            .then(course => {
                this.course = course; // saved hero, w/ id if new
                this.goBack(course);
            })
            .catch(error => this.error = error); // TODO: Display error message
        }

    goBack(savedCourse: Course = null) {
        this.close.emit(savedCourse);
        if (this.navigated) { window.history.back(); }
    }     
}