import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  constructor(private gradeService: TeacherService
    ) { }

    private teachers = [];

    ngOnInit() {
      this.gradeService.getAll().subscribe((response: any) => {
        this.teachers = response;
    });
  }

}
