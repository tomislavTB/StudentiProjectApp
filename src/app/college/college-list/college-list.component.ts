import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.scss']
})
export class CollegeListComponent implements OnInit {

  constructor(private collegeService: CollegeService
    ) { }

    private colleges = [];

    ngOnInit() {
      this.collegeService.getAll().subscribe((response: any) => {
        this.colleges = response;
    });
  }

}
