import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradeService } from '../grade.service';

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.scss']
})
export class GradeFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private gradeService: GradeService
  ) { }

  public grade : any = {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      const gradeId = params['id'];
      if(gradeId != null) {
        this.getGrade(gradeId);
      }
    });
  }

  getGrade(gradeId) {
      this.gradeService.getOne(gradeId).subscribe(response =>
        {
          this.grade = response;
          this.grade.id = gradeId;
        }
      );
  }

}
