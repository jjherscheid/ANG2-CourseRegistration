import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Course } from './course';

import { CourseService } from './course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-course-detail',
    templateUrl: 'app/courses/course-detail.component.html'
})
export class CourseDetailComponent implements OnInit, OnDestroy {
    @Input() course: Course;
    @Output() close = new EventEmitter();
    constructor(
        private courseService: CourseService,
        private activatedRoute: ActivatedRoute) {
    }

    private navigated: boolean;
    private error: any;
    private routerParamSubscription: any;

    ngOnInit() {
        //this.activatedRoute.snapshot.params['id'];

        this.routerParamSubscription = this.activatedRoute.params.subscribe(params => {
            this.navigated = true;
            let id = +params['id'];
            this.courseService.getCourse(id)
                .then(course => this.course = course);
        });

        this.navigated = false;
        this.course = new Course();
    }

    ngOnDestroy() {
        this.routerParamSubscription.unsubscribe();
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