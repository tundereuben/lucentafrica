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
        description: 'Learn frontend, backend and everything in-between to build and deliver scalable web applications',
        content: ['HTML', 'CSS', 'JavaScript', 'Node', 'NPM', 'Express', 'MongoDB', 'Mongoose'],
        imageUrl: 'full-stack.webp',
        courseUrl: 'full-stack'
      },
      {
        title: 'HTML & CSS',
        description: 'Use HTML5 and CSS3 to build website content and add beautiful styling and decoration',
        content: ['HTML', 'CSS'],
        imageUrl: 'html-css.jpg',
        courseUrl: 'html-css'
      },
      {
        title: 'Programming in JavaScript',
        description: 'Start with the fundamentals and progresses to advanced programming concepts.',
        content: ['JavaScript'],
        imageUrl: 'javascript.jpg',
        courseUrl: 'javascript'
      },
      {
        title: 'Bootstrap',
        description: 'Create a mobile-first responsive website that adapts to any screen size',
        content: ['BootStrap'],
        imageUrl: 'bootstrap.jpg',
        courseUrl: 'bootstrap'
      },
      {
        title: 'WordPress Web Design',
        description: 'Learn how to develop and manage websites without writing code',
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
        description: 'Learn computer fundamentals, word processing, spreadsheets and presentations',
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
  description?: string;
  content: string[];
  duration?: string;
  imageUrl?: string;
  courseUrl?: string;
}
