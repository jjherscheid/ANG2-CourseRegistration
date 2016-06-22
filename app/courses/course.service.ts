import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'

import { COURSES } from './mock-courses';
import { Course } from './course';


@Injectable()
export class CourseService {
    constructor(private http: Http) { }

    private courseUrl = 'http://localhost:4402/api/courses';  // URL to web api

    getCourses(): Promise<Course[]> {
        return this.http.get(this.courseUrl)
            .toPromise()
            .then(function (response) {
                return response.json()
            })
            .catch(this.handleError);
    }

    save(course: Course): Promise<Course> {
        if (course.id) {
            return this.put(course);
        }
        return this.post(course);
    }

    private post(course: Course): Promise<Course> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.courseUrl, JSON.stringify(course), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private put(course: Course): Promise<Course> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `${this.courseUrl}/${course.id}`;

        return this.http
            .post(url, JSON.stringify(course), { headers: headers })
            .toPromise()
            .then(() => course)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getCoursesFromMemory() {
        return Promise.resolve(COURSES);
    }

    getCourse(id: number) {
        return this.getCourses()
            .then(courses => courses.filter(course => course.id === id)[0]);
    }

}