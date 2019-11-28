import {Component, Input, OnInit} from '@angular/core';
import {PrevisionService} from '../services/prevision.service';
import {FormControl} from '@angular/forms';
import {CityListItem} from '../model/city-list-item.model';

@Component({
    selector: 'app-search-city',
    templateUrl: './search-city.component.html',
    styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

    @Input()
    city: string;

    myControl = new FormControl();
    options: CityListItem[] = [];
    // options: SearchCityResult[] = [];

    constructor(private previsionService: PrevisionService) {
    }

  ngOnInit(): void {
  }

  search(searching: string) {
        console.log("searching: " + searching);
        if (searching.length >= 3) {
            this.previsionService.searchCity(searching).subscribe(data => {
                console.log("trouve!");
                this.options = data;
            });
        }
  }

  getPrevisionOfCity(city: string) {
      console.log("TODO: change city");
  }
}
