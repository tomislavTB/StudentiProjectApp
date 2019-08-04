import { Component, OnInit } from '@angular/core';
import { DivisionService } from '../division.service';

@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.scss']
})
export class DivisionListComponent implements OnInit {

  constructor(private divisionService: DivisionService
    ) { }

    private divisions = [];

    ngOnInit() {
      this.divisionService.getAll().subscribe((response: any) => {
        this.divisions = response;
    });
  }

}
