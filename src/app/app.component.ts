import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
  title = 'My first Angular 2 app';
}
