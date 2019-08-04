import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private gradeService: StudentService
    ) { }

    private students = [];

    ngOnInit() {
      this.gradeService.getAll().subscribe((response: any) => {
        this.students = response;
    });
  }

}
