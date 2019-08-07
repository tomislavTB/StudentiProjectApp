import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService
  ) { }

  public city : any = {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      const cityId = params['id'];
      if(cityId != null) {
        this.getCity(cityId);
      }
    });
  }

  getCity(cityId) {
      this.cityService.getOne(cityId).subscribe(response =>
        {
          this.city = response;
          this.city.id = cityId;
        }
      );
  }

}
