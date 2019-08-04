import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor(private courseService: CourseService
    ) { }

    private courses = [];

    ngOnInit() {
      this.courseService.getAll().subscribe((response: any) => {
        this.courses = response;
    });
  }

}
