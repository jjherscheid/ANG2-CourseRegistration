import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from './person';
import { PersonsService } from './person.service';

@Component({
    selector: 'my-persons',
    template: `
  <h2>My Persons</h2>
  <ul class="persons">
    <li *ngFor="let person of persons" (click)="onSelect(person)" [class.selected]="person === selectedPerson">
      <!-- each person goes here -->
      <span class="badge">{{person.id}}</span> {{person.name}}
    </li>
  </ul>    
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .persons {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .persons li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .persons li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .persons li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .persons .text {
    position: relative;
    top: -3px;
  }
  .persons .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class PersonsComponent implements OnInit {
    selectedPerson: Person;

    persons: Person[];

    constructor(
        private router: Router,
        private personService: PersonsService) {
    }

    onSelect(person: Person) { 
        this.router.navigate(['persondetail', person.id]);

        //this.selectedCourse = course; 
        }

    getCourses() {
        this.personService.getPersons().then(persons => this.persons = persons);
    }
    
    ngOnInit() {
        this.getCourses();
    }
}