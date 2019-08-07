import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DivisionService } from '../division.service';

@Component({
  selector: 'app-division-form',
  templateUrl: './division-form.component.html',
  styleUrls: ['./division-form.component.scss']
})
export class DivisionFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private divisionService: DivisionService
  ) { }

  public division : any = {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      const divisionId = params['id'];
      if(divisionId != null) {
        this.getDivision(divisionId);
      }
    });
  }

  getDivision(divisionId) {
      this.divisionService.getOne(divisionId).subscribe(response =>
        {
          this.division = response;
          this.division.id = divisionId;
        }
      );
  }

}
