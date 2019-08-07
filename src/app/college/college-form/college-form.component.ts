import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-college-form',
  templateUrl: './college-form.component.html',
  styleUrls: ['./college-form.component.scss']
})
export class CollegeFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private collegeService: CollegeService
  ) { }

  public college : any = {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      const collegeId = params['id'];
      if(collegeId != null) {
        this.getCollge(collegeId);
      }
    });
  }

  getCollge(collegeId) {
      this.collegeService.getOne(collegeId).subscribe(response =>
        {
          this.college = response;
          this.college.id = collegeId;
        }
      );
  }

}
