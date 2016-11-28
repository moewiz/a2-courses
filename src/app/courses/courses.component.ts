import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  title: string = "The title of courses page";
  courses: Array<string> = [
    "Course 1",
    "Course 2",
    "Course 3"
  ];
}
