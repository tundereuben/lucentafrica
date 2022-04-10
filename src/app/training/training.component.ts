import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  courses: Course[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.courses = [
      {
        title: 'Full Stack Web Development',
        content: ['HTML', 'CSS', 'JavaScript', 'Node', 'NPM', 'Express', 'MongoDB', 'Mongoose'],
        imageUrl: 'full-stack.webp',
        courseUrl: 'full-stack'
      },
      {
        title: 'HTML & CSS',
        content: ['HTML', 'CSS'],
        imageUrl: 'html-css.jpg',
        courseUrl: 'html-css'
      },
      {
        title: 'Programming in JavaScript',
        content: ['JavaScript'],
        imageUrl: 'javascript.jpg',
        courseUrl: 'javascript'
      },
      {
        title: 'Bootstrap',
        content: ['BootStrap'],
        imageUrl: 'bootstrap.jpg',
        courseUrl: 'bootstrap'
      },
      {
        title: 'WordPress Web Design',
        content: ['WordPress'],
        imageUrl: 'wordpress.jpg',
        courseUrl: 'wordpress'
      },
      /*{
        title: 'Learn MySQL',
        content: ['MySQL'],
        imageUrl: 'mysql.jpg',
        courseUrl: 'mysql'
      },*/
      {
        title: 'Office Workspace Basics',
        content: ['Workspace Basics', 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'],
        imageUrl: 'office.webp',
        courseUrl: 'office-workspace'
      }
    ];
  }

  proceedToCourse(courseUrl: string) {
    this.router.navigate([courseUrl]);
  }

}

export interface Course {
  title: string;
  content: string[];
  duration?: string;
  imageUrl?: string;
  courseUrl?: string;
}
