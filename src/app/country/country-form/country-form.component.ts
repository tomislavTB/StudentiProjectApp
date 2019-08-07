import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) { }

  public country : any = {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      const countryId = params['id'];
      if(countryId != null) {
        this.getCountry(countryId);
      }
    });
  }

  getCountry(countryId) {
      this.countryService.getOne(countryId).subscribe(response =>
        {
          this.country = response;
          this.country.id = countryId;
        }
      );
  }

}
