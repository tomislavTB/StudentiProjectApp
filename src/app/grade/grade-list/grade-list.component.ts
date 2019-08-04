import { Component, OnInit } from '@angular/core';
import { GradeService } from '../grade.service';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.scss']
})
export class GradeListComponent implements OnInit {

  constructor(private gradeService: GradeService
    ) { }

    private grades = [];

    ngOnInit() {
      this.gradeService.getAll().subscribe((response: any) => {
        this.grades = response;
    });
  }

}

