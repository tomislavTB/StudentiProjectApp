import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  constructor(
    private cityService: CityService
  ) { }

  private cities = [];

  ngOnInit() {
    this.cityService.getAll().subscribe((response: any) => {
      this.cities = response;
    });
  }

  public getReport() {
    // var podaci = format.getData();
    // this.cityService.addCity(podaci).subscribe(response => {
    //   if(response.status === 201) {

    //   } else {
    //     alert("dogodila se pogreska na backendu javite se administratoru..")
    //   }
    // })
    alert("gumb stisnut")
    return false
  }

}
