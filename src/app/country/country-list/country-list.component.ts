import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  constructor(private countryService: CountryService
    ) { }

    private countries = [];

    ngOnInit() {
      this.countryService.getAll().subscribe((response: any) => {
        this.countries = response;
    });
  }

}
