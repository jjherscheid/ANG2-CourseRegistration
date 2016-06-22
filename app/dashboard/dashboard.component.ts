import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../courses/course';
import { CourseService } from '../courses/course.service';

import { Person } from '../person/person';
import { PersonsService } from '../person/person.service';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    courses: Course[] = [];
    persons: Person[] = [];

    constructor(
        private router: Router,
        private courseService: CourseService,
        private personService: PersonsService
        ) {}

    ngOnInit() {
        this.courseService.getCourses()
            .then(courses => this.courses = courses.slice(1,5));

        this.personService.getPersons()
            .then(persons => this.persons = persons.slice(1,3));
    }

    gotoDetail(course: Course) {
        let link = ['detail', course.id];
        this.router.navigate(link);
    }

    gotoPersonDetail(person: Person) {
        let link = ['persondetail', person.id];
        this.router.navigate(link);
    }
}