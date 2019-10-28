import {Component, Input, OnInit} from '@angular/core';
import {PrevisionService} from '../services/prevision.service';
import {Prevision} from '../model/prevision.model';
import {FormControl} from '@angular/forms';
import {SearchCityResult} from '../model/search-city-result.model';

@Component({
    selector: 'app-search-city',
    templateUrl: './search-city.component.html',
    styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

    @Input()
    city: string;

    myControl = new FormControl();
    options: SearchCityResult[] = [];

    constructor(private previsionService: PrevisionService) {
    }

  ngOnInit(): void {
  }

  search(searching: string) {
        console.log("TODO: " + JSON.stringify(this.myControl));
      this.previsionService.searchCity(searching).subscribe(data => {
          this.options = data;
      });
  }
}
